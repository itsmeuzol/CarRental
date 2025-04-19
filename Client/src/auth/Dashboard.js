import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Key, LogOut, Calendar, X } from "lucide-react";
import API_BASE_URL from "../config/apiConfig";

function Dashboard() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
  const [bookings, setBookings] = useState([]);
  const [showBookings, setShowBookings] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("name");

    if (!storedName) {
      navigate("/Login");
    } else if (storedName.toLowerCase() === "admin") {
      navigate("/admin/dashboard");
    } else {
      setName(toTitleCase(storedName));
      setGreeting(getGreeting());
    }

    const interval = setInterval(() => {
      setGreeting(getGreeting());
    }, 60000);

    return () => clearInterval(interval);
  }, [navigate]);

  const logout = () => {
    localStorage.clear();
    navigate("/Login");
  };

  const fetchBookings = async () => {
    setIsLoading(true);
    try {
      const userId = localStorage.getItem("id");
      const response = await fetch(
        `${API_BASE_URL}/api/booking?user_id=${userId}`
      );
      if (!response.ok) throw new Error("Failed to fetch bookings");
      const data = await response.json();

      const transformed = data.map((booking) => ({
        ...booking,
        total_price: booking.total_price?.$numberDecimal || booking.total_price,
        paid_price: booking.paid_price?.$numberDecimal || booking.paid_price,
        payment: booking.payment
          ? {
              ...booking.payment,
              amount:
                booking.payment.amount?.$numberDecimal ||
                booking.payment.amount,
            }
          : null,
      }));
      setBookings(transformed);
    } catch (err) {
      console.error("Error fetching bookings:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const toTitleCase = (str) =>
    str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-800">{greeting}</h1>
          <p className="text-lg text-gray-600">Hi, {name}</p>
        </div>

        <div className="space-y-4">
          <Link
            to="/Profile"
            className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 p-3 rounded-xl transition"
          >
            <User className="w-5 h-5 text-gray-700" />
            <span className="font-medium">
              Your Profile
              <p className="text-sm text-gray-500">
                View and edit your information
              </p>
            </span>
          </Link>

          <Link
            to="/ChangePassword"
            className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 p-3 rounded-xl transition"
          >
            <Key className="w-5 h-5 text-gray-700" />
            <span className="font-medium">
              Change Password
              <p className="text-sm text-gray-500">
                Update your security settings
              </p>
            </span>
          </Link>

          <button
            onClick={() => {
              if (!showBookings) fetchBookings();
              setShowBookings(!showBookings);
            }}
            className="flex items-center gap-3 w-full bg-gray-100 hover:bg-gray-200 p-3 rounded-xl transition"
          >
            <Calendar className="w-5 h-5 text-gray-700" />
            <span className="font-medium text-left">
              Show Booking Details
              <p className="text-sm text-gray-500">
                View your bookings and payment details
              </p>
            </span>
          </button>

          <button
            onClick={logout}
            className="flex items-center gap-3 w-full bg-red-600 hover:bg-red-700 text-white p-3 rounded-xl transition"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {showBookings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 space-y-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold text-gray-900">
                Booking Details
              </h2>
              <button
                onClick={() => setShowBookings(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            {isLoading ? (
              <p className="text-center text-gray-600">Loading bookings...</p>
            ) : bookings.length > 0 ? (
              <div className="space-y-4 overflow-y-auto max-h-96 pr-1">
                {bookings.map((booking, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg shadow-sm"
                  >
                    <p className="font-medium text-gray-900">
                      Booking #{booking.booking_id}
                    </p>
                    <p className="text-gray-900">
                      Transaction ID: {booking.transaction_id}
                    </p>
                    <p className="text-sm text-gray-600">
                      Date: {formatDate(booking.booking_start_date)}
                    </p>
                    <p className="text-sm text-gray-600">
                      Booking Status: {booking.booking_status}
                    </p>
                    <p className="text-sm text-gray-600">
                      Payment Status: {booking.payment_status}
                    </p>
                    <p className="text-sm text-gray-600">
                      Total Amount: ${booking.total_price}
                    </p>
                    <p className="text-sm text-gray-600">
                      Paid Amount: ${booking.paid_price}
                    </p>
                    {booking.payment && (
                      <div className="mt-2">
                        <p className="text-sm font-medium text-gray-900">
                          Payment Details
                        </p>
                        <p className="text-sm text-gray-600">
                          Amount: ${booking.payment.amount}
                        </p>
                        <p className="text-sm text-gray-600">
                          Status: {booking.payment.status}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600">No bookings found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
