"use client";

import { useState } from 'react';
import { Film, Popcorn, CreditCard, Calendar, Lock } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/hooks/useToast";

export default function Home() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [hoveredSeat, setHoveredSeat] = useState(null);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('idle');
  const [paymentForm, setPaymentForm] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: ''
  });
  const { toast } = useToast();

  const rows = ['K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B'];
  const seatsPerRow = 15;
  const premiumPrice = 300;
  const executivePrice = 280;
  const normalPrice = 260;

  const bestsellers = ['K6', 'K7', 'I5', 'H8'];
  const soldSeats = ['K9', 'K10', 'J7', 'J8', 'J9', 'H7', 'G8', 'F7'];

  const getSeatPrice = (row) => {
    if (row <= 1) return premiumPrice;
    if (row <= 5) return executivePrice;
    return normalPrice;
  };

  const handleSeatClick = (seatId) => {
    if (soldSeats.includes(seatId)) return;
    
    setSelectedSeats((prev) => 
      prev.includes(seatId) 
        ? prev.filter(id => id !== seatId)
        : [...prev, seatId]
    );
  };

  const getTotalPrice = () => {
    return selectedSeats.reduce((total, seat) => {
      const row = rows.indexOf(seat[0]);
      return total + getSeatPrice(row);
    }, 0);
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setPaymentStatus('processing');

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    if (
      paymentForm.cardNumber.length === 16 &&
      paymentForm.cvv.length === 3 &&
      paymentForm.name &&
      paymentForm.expiryDate
    ) {
      toast({
        title: "Payment Successful!",
        description: `Booked seats: ${selectedSeats.join(", ")}`,
      });
      setPaymentStatus('success');
      setIsPaymentOpen(false);
      setSelectedSeats([]);
      setPaymentForm({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        name: ''
      });
    } else {
      toast({
        variant: "destructive",
        title: "Payment Failed",
        description: "Please check your card details and try again.",
      });
      setPaymentStatus('idle');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Format card number with spaces
    if (name === 'cardNumber') {
      formattedValue = value.replace(/\D/g, '').slice(0, 16);
    }
    // Format expiry date
    else if (name === 'expiryDate') {
      formattedValue = value
        .replace(/\D/g, '')
        .slice(0, 4)
        .replace(/(\d{2})(\d)/, '$1/$2');
    }
    // Format CVV
    else if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '').slice(0, 3);
    }

    setPaymentForm(prev => ({
      ...prev,
      [name]: formattedValue
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Film className="w-8 h-8" />
          <h1 className="text-3xl font-bold">Movie Seat Booking</h1>
        </div>

        <div className="relative mb-12">
          <div className="w-full h-4 bg-gradient-to-b from-white/20 to-transparent rounded-t-full mb-8"></div>
          <p className="text-center text-sm text-gray-400 absolute bottom-0 left-1/2 -translate-x-1/2">Screen</p>
        </div>

        <div className="grid gap-2 mb-8">
          {rows.map((row, rowIndex) => (
            <div key={row} className="flex items-center gap-2">
              <span className="w-6 text-center text-gray-400">{row}</span>
              <div className="flex gap-2 flex-1 justify-center">
                {Array.from({ length: seatsPerRow }, (_, i) => {
                  const seatId = `${row}${i + 1}`;
                  const isSelected = selectedSeats.includes(seatId);
                  const isSold = soldSeats.includes(seatId);
                  const isBestseller = bestsellers.includes(seatId);
                  
                  return (
                    <button
                      key={seatId}
                      className={`
                        w-8 h-8 rounded-t-lg transition-all duration-300 relative
                        ${isSold ? 'bg-gray-600 cursor-not-allowed' : 
                          isSelected ? 'bg-green-500 hover:bg-green-600' :
                          isBestseller ? 'bg-yellow-500 hover:bg-yellow-600' :
                          'bg-blue-500 hover:bg-blue-600'}
                        ${hoveredSeat === seatId ? 'transform scale-110' : ''}
                      `}
                      onClick={() => handleSeatClick(seatId)}
                      onMouseEnter={() => setHoveredSeat(seatId)}
                      onMouseLeave={() => setHoveredSeat(null)}
                      disabled={isSold}
                    >
                      <span className="text-xs">{i + 1}</span>
                      {hoveredSeat === seatId && !isSold && (
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black px-2 py-1 rounded text-xs whitespace-nowrap">
                          Seat {seatId}: ₹{getSeatPrice(rowIndex)}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
              <span className="w-6"></span>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span className="text-sm">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span className="text-sm">Selected</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-500 rounded"></div>
            <span className="text-sm">Bestseller</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-600 rounded"></div>
            <span className="text-sm">Sold</span>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Popcorn className="w-6 h-6 text-yellow-500" />
              <h2 className="text-xl font-semibold">Booking Summary</h2>
            </div>
            <span className="text-sm text-gray-400">
              Selected Seats: {selectedSeats.length}
            </span>
          </div>
          
          {selectedSeats.length > 0 ? (
            <>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-400">Selected Seats: {selectedSeats.join(", ")}</p>
                <p className="text-lg">
                  Total Amount: <span className="font-bold text-green-500">₹{getTotalPrice()}</span>
                </p>
              </div>
              <button 
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition-colors"
                onClick={() => setIsPaymentOpen(true)}
              >
                Proceed to Payment
              </button>
            </>
          ) : (
            <p className="text-gray-400 text-center">Please select your seats</p>
          )}
        </div>
      </div>

      <Dialog open={isPaymentOpen} onOpenChange={setIsPaymentOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Payment Details</DialogTitle>
          </DialogHeader>
          <form onSubmit={handlePaymentSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Cardholder Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                value={paymentForm.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <div className="relative">
                <Input
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={paymentForm.cardNumber}
                  onChange={handleInputChange}
                  required
                  maxLength={16}
                />
                <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <div className="relative">
                  <Input
                    id="expiryDate"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={paymentForm.expiryDate}
                    onChange={handleInputChange}
                    required
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <div className="relative">
                  <Input
                    id="cvv"
                    name="cvv"
                    type="text"
                    placeholder="123"
                    value={paymentForm.cvv}
                    onChange={handleInputChange}
                    required
                    maxLength={3}
                  />
                  <Lock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Button 
                type="submit" 
                className="w-full"
                disabled={paymentStatus === 'processing'}
              >
                {paymentStatus === 'processing' ? 'Processing...' : `Pay ₹${getTotalPrice()}`}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}