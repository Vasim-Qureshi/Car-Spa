import { Phone, Mail, MapPin } from "lucide-react";

// Footer Component
const Footer = () => {
    return (
        <footer id="contact" className="border-t bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
                <div>
                    <div className="flex items-center gap-2 font-semibold">
                        <img src="/CarDetailingWebLogo.png" className="w-20 h-20" />
                        <span className="text-xl font-serif">H A CAR SPA</span>
                    </div>
                    <p className="text-sm text-slate-600 mt-3">Premium car detailing delivered to your doorstep. Eco‑friendly. Insured. Satisfaction guaranteed.</p>
                </div>
                <div>
                    <p className="font-semibold mb-2">Contact</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 9116447704</li>
                        <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> support@hacarspa.in</li>
                        <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Serving: Jaipur-302016, Rajasthan</li>
                    </ul>
                </div>
                <div>
                    <p className="font-semibold mb-2">Hours</p>
                    <p className="text-sm text-slate-600">Mon–Sun: 7:00 – 21:00</p>
                </div>
            </div>
            <div className="text-center text-xs text-slate-500 pb-8">© {new Date().getFullYear()} H A CAR SPA</div>
        </footer>
    );
}

export default Footer;
