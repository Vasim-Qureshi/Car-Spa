import { motion } from "framer-motion";

// Gallery Component
const Gallery = () => {
    const images = [
        "https://st4.depositphotos.com/16014774/31350/i/1600/depositphotos_313508162-stock-photo-car-washing-workers-using-foam.jpg",
        "https://esteticars.cl/wp-content/uploads/2023/04/proceso-lavado-autos-profesional-detergente-quimico-hidrolimpiadora-alta-presion-1-1024x683.jpg",
        "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1600&auto=format&fit=crop",
        "https://housegrail.com/wp-content/uploads/2021/08/foam-cannon_Shutterstock_Roman-Zaiets.jpg",
        "https://tse1.mm.bing.net/th/id/OIP.sVnqfhya4divqsd23AepaQHaEx?pid=Api&P=0&h=180",
        "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1600&auto=format&fit=crop",
    ];
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((src, i) => (
                <motion.img
                    key={i}
                    src={src}
                    alt="car detailing"
                    className="rounded-2xl object-cover h-48 w-full"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                />
            ))}
        </div>
    );
}

export default Gallery;