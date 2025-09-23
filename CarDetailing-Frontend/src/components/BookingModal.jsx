import { useState } from "react";
import { motion } from "framer-motion";
import { X, Calendar, Clock3, CheckCircle2 } from "lucide-react";

const BookingModal = ({ onClose, onBooked, booked, packages }) => {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        city: "",
        address: "",
        date: "",
        time: "",
        pkg: packages.find((p) => p.id === "pro")?.id || packages[0].id,
    });

    function submit(e) {
        e.preventDefault();
        // Simulate booking success
        onBooked();
    }

    return (
        <motion.div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-black/40" onClick={onClose} />
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                className="relative w-full max-w-xl bg-white rounded-3xl shadow-xl overflow-hidden"
            >
                <div className="flex items-center justify-between border-b p-4">
                    <h3 className="font-semibold">Book doorstep service</h3>
                    <button onClick={onClose} className="p-2 rounded-lg hover:bg-slate-100"><X className="w-5 h-5" /></button>
                </div>

                <div className="p-6">
                    {!booked ? (
                        <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="sm:col-span-2">
                                <label className="text-sm font-medium">Package</label>
                                <select
                                    className="mt-1 w-full rounded-xl border border-slate-300 p-2.5"
                                    value={form.pkg}
                                    onChange={(e) => setForm({ ...form, pkg: e.target.value })}
                                >
                                    {packages.map((p) => (
                                        <option key={p.id} value={p.id}>
                                            {p.name} — ₹{p.price}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="text-sm font-medium">Name</label>
                                <input className="mt-1 w-full rounded-xl border border-slate-300 p-2.5" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                            </div>
                            <div>
                                <label className="text-sm font-medium">Phone</label>
                                <input className="mt-1 w-full rounded-xl border border-slate-300 p-2.5" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                            </div>
                            <div>
                                <label className="text-sm font-medium">City</label>
                                <input className="mt-1 w-full rounded-xl border border-slate-300 p-2.5" required value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
                            </div>
                            <div>
                                <label className="text-sm font-medium">Address</label>
                                <input className="mt-1 w-full rounded-xl border border-slate-300 p-2.5" required value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
                            </div>
                            <div>
                                <label className="text-sm font-medium flex items-center gap-2"><Calendar className="w-4 h-4" /> Date</label>
                                <input type="date" className="mt-1 w-full rounded-xl border border-slate-300 p-2.5" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
                            </div>
                            <div>
                                <label className="text-sm font-medium flex items-center gap-2"><Clock3 className="w-4 h-4" /> Time</label>
                                <input type="time" className="mt-1 w-full rounded-xl border border-slate-300 p-2.5" required value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} />
                            </div>
                            <div className="sm:col-span-2 flex items-center justify-end gap-3 pt-2">
                                <button type="button" onClick={onClose} className="px-4 py-2 rounded-xl border border-slate-300 hover:bg-slate-50">Cancel</button>
                                <button type="submit" className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800">Confirm booking</button>
                            </div>
                        </form>
                    ) : (
                        <div className="text-center py-8">
                            <div className="mx-auto w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                                <CheckCircle2 className="w-7 h-7 text-green-600" />
                            </div>
                            <h4 className="mt-4 text-xl font-semibold">Booking confirmed!</h4>
                            <p className="text-slate-600 mt-1">We’ve sent a confirmation via SMS/Email. See you soon.</p>
                            <button onClick={onClose} className="mt-6 px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800">Close</button>
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}

export default BookingModal;