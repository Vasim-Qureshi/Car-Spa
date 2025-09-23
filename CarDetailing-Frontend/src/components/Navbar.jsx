import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
// import { jwtDecode } from "jwt-decode";

const Navbar = ({ onBook }) => {
    const [customerId, setCustomerId] = useState();
/*
    useEffect(() => {
        const authToken = localStorage.getItem("authToken");
        const decoded = jwtDecode(authToken);
        const customerId = decoded.id;
        setCustomerId(customerId);
    }, []);
*/
    return (
        <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
                <a href="/" className="flex items-center gap-2 font-semibold">
                    <div className=" font-bold shadow-md shadow-blue-600 hover:shadow-black text-blue-500 w-20 h-20 text-center border border-blue-500 rounded-2xl">
                            {/* <Car className="w-5 h-5" /> */}
                            <img src="/CarDetailingWebLogo.png" className="w-20 h-20" />
                             {/* <span>H A Car Spa</span> */}
                    </div>
                </a>
                <nav className="hidden md:flex items-center gap-8 text-sm">
                    <a className="hover:text-slate-900 text-slate-600" href="#services">Services</a>
                    <a className="hover:text-slate-900 text-slate-600" href="#pricing">Pricing</a>
                    <a className="hover:text-slate-900 text-slate-600" href="#faq">FAQ</a>
                    <a className="hover:text-slate-900 text-slate-600" href="#contact">Contact</a>
                    <Link className="hover:text-slate-900 text-slate-600" to={`/profile/${customerId}`}>Profile</Link>
                </nav>
                <div className="flex items-center gap-3">
                    <Link className="hidden sm:block text-sm text-slate-600" to="tel:+919116447704">
                        <Phone className="w-4 h-4 inline mr-1" /> +91 9116447704
                    </Link>
                    <button
                        onClick={onBook}
                        className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition shadow-sm"
                    >
                        Book now
                    </button>
                </div>
            </div>
        </header>
    );
}
export default Navbar;