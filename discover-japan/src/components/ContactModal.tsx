// CURRENT:
emailjs.init({
  publicKey: "YOUR_EMAILJS_PUBLIC_KEY",
});

// REPLACE WITH (example):
emailjs.init({
  publicKey: "6rR68Rd0YGa3JnM1y",  // Your actual Public Key
});import { useState, useEffect } from "react";
import { X, Mail, Loader } from "lucide-react";
import emailjs from "@emailjs/browser";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Initialize EmailJS (do this once)
  useEffect(() => {
    emailjs.init({
      publicKey: "6vEOQMEmVHwwXK-gK", // Replace with your EmailJS public key
    });
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        "service_836lhxi", // Replace with your EmailJS service ID
        "template_uvd5dhj", // Replace with your EmailJS template ID
        {
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          title: formData.message,
        }
      );

      setShowSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });

      // Close modal after 2 seconds
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Error sending email:", error);
      setErrors({
        submit: "Failed to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      {/* Modal Container */}
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#E60023] to-[#c40020] p-6 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <Mail size={24} />
            <h2 className="text-2xl font-display font-bold">Get in Touch</h2>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-white/20 p-1 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {showSuccess ? (
            <div className="text-center py-8">
              <div className="mb-4 text-5xl">✨</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Thank You!
              </h3>
              <p className="text-muted-foreground">
                We'll contact you shortly with more details about your Japan journey.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-colors text-black placeholder-gray-500 ${
                    errors.fullName
                      ? "border-red-500 bg-red-50/10"
                      : "border-gray-200 bg-gray-50"
                  } focus:outline-none focus:border-primary focus:bg-white`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-colors text-black placeholder-gray-500 ${
                    errors.email
                      ? "border-red-500 bg-red-50/10"
                      : "border-gray-200 bg-gray-50"
                  } focus:outline-none focus:border-primary focus:bg-white`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXXXXXXX"
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-colors text-black placeholder-gray-500 ${
                    errors.phone
                      ? "border-red-500 bg-red-50/10"
                      : "border-gray-200 bg-gray-50"
                  } focus:outline-none focus:border-primary focus:bg-white`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Message / Query
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your Japan travel plans..."
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-colors resize-none text-black placeholder-gray-500 ${
                    errors.message
                      ? "border-red-500 bg-red-50/10"
                      : "border-gray-200 bg-gray-50"
                  } focus:outline-none focus:border-primary focus:bg-white`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Error */}
              {errors.submit && (
                <div className="p-3 bg-red-50 border-2 border-red-500 rounded-lg text-red-600 text-sm">
                  {errors.submit}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#E60023] to-[#c40020] text-white font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
              >
                {isLoading ? (
                  <>
                    <Loader size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                We respect your privacy. Your information will never be shared.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
