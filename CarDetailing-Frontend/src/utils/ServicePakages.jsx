import { useMemo } from "react";
import { Sparkles, SprayCan } from "lucide-react";

// Service Packages Data
const ServicePackages = () => {
    return useMemo(
        () => ([
            {
                id: "basic",
                name: "Quick Shine",
                price: 899,
                time: "45–60 min",
                features: [
                    "Exterior foam wash",
                    "Wheel & tire clean",
                    "Quick interior vacuum",
                    "Streak-free glass",
                ],
                icon: <Sparkles className="w-5 h-5" />,
            },
            {
                id: "pro",
                name: "Deep Clean",
                price: 1599,
                time: "90–110 min",
                features: [
                    "Exterior foam + wax",
                    "Full interior vacuum",
                    "APC wipe-down & plastics",
                    "Interior & exterior glass",
                ],
                // icon: <Broom className="w-5 h-5" />,
                popular: true,
            },
            {
                id: "elite",
                name: "Showroom",
                price: 2499,
                time: "150–170 min",
                features: [
                    "Snow foam + premium wax",
                    "Steam clean interiors",
                    "Leather care / conditioner",
                    "Tire shine + trim restore",
                ],
                icon: <SprayCan className="w-5 h-5" />,
            },
        ]),
        []
    );
};

export default ServicePackages;