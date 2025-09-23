// ExamplePage.jsx
import ServiceCard from "../components/ServiceCard";
import { addToCart } from "../api/cartApi";
import ServicesCarousel from "../components/ServicesCaousel";

const ServicesExamplePage = () => {
  const services = [
    {
      _id: "64f9a2222f5a8b23c67d9f11",
      title: "Car Wash",
      category: "Cleaning",
      sortDescription: "Quick and detailed car wash service.",
      servicePrice: 500,
      offerPrice: 400,
      offer: 20,
      duration: "30 mins",
      images: ["https://wallpapercave.com/wp/wp2913496.jpg"],
      starRating: 4,
      reviews: ["Great service!", "Very clean car!"],
    },
    {
      _id: "64f9a2222f5a8b23c67d9f12",
      title: "Interior Detailing",
      category: "Detailing",
      sortDescription: "Deep interior cleaning with premium products.",
      servicePrice: 2000,
      offerPrice: 1500,
      offer: 25,
      duration: "2 hours",
      images: ["https://affordableremediation.com/wp-content/uploads/2019/01/professional-dry-cleaning-of-car-seats.jpg", "https://wallpapercave.com/wp/wp2913496.jpg"],
      starRating: 5,
      reviews: ["Excellent job!", "Car feels new!"],
    },
    {
      _id: "64f9a2222f5a8b23c67d9f13",
      title: "Exterior Detailing",
      category: "Detailing",
      sortDescription: "Comprehensive exterior cleaning and polishing.",
      servicePrice: 2500,
      offerPrice: 2000,
      offer: 20,
      duration: "2.5 hours",
      images: ["https://images.ctfassets.net/uwf0n1j71a7j/6ihnLVbvnXPpEzduw0cvZH/81e1f68af3a77c000cf19c777324cd8c/car-detailing-guide.png"],
      starRating: 5,
      reviews: ["Amazing shine!", "Highly recommend!"],
    },
    {
      _id: "64f9a2222f5a8b23c67d9f14",
      title: "Full Detailing",
      category: "Detailing",
      sortDescription: "Complete interior and exterior detailing package.",
      servicePrice: 4000,
      offerPrice: 3000,
      offer: 25,
      duration: "5 hours",
      images: ["https://dadetail.in/wp-content/uploads/2023/06/Exterior-Car-Detailing.jpg"],
      starRating: 5,
      reviews: ["Best service ever!", "My car looks fantastic!"],
    },
    {
      _id: "64f9a2222f5a8b23c67d9f15",
      title: "Engine Cleaning",
      category: "Maintenance",
      sortDescription: "Professional engine bay cleaning service.",
      servicePrice: 1500,
      offerPrice: 1200,
      offer: 20,
      duration: "1 hour",
      images: ["https://ecowavemobiledetail.com/wp-content/uploads/2021/01/car-detailing-maintenance-cleaning-engine-with-the-XVTFYB6-scaled.jpg"],
      starRating: 4,
      reviews: ["Engine looks great!", "Very thorough cleaning!"],
    },
  ];
  const customerId = "64f9a1002f5a8b23c67d9f00"; // Replace with actual user ID

  const handleBook = (service) => {
    console.log(service, customerId);

    let quantity = 1; // Default quantity
    addToCart(service._id, quantity, customerId);
    alert(`Booking: ${service.title}`);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Available Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 scrollable-container" style={{ maxWidth: '100%', overflowX: 'auto' }}>
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} onBook={handleBook} />
          ))}
      </div>
      <ServicesCarousel services={services} handleBook={handleBook} />
    </div>
  );
};

export default ServicesExamplePage;
