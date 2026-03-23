import { Play } from "lucide-react";
import { motion } from "framer-motion";

const videos = [
  { doctor: "Dr. Amit Shah", specialty: "Cardiology", title: "Heart Health Awareness" },
  { doctor: "Dr. Priya Mehta", specialty: "Neurology", title: "Understanding Stroke" },
  { doctor: "Dr. Rajesh Kumar", specialty: "Orthopedics", title: "Joint Care Tips" },
  { doctor: "Dr. Sunita Patel", specialty: "Oncology", title: "Cancer Prevention" },
  { doctor: "Dr. Vikram Singh", specialty: "Gastro", title: "Digestive Health" },
];

const VideoSeries = () => (
  <section className="py-20 bg-sal-gray">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="section-heading-center">Video Series By Our Expert Doctors</h2>
      </div>
      <div className="flex gap-6 overflow-x-auto pb-4 snap-x">
        {videos.map((v, i) => (
          <motion.div
            key={v.doctor}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="sal-card min-w-[260px] snap-start flex-shrink-0"
          >
            <div className="relative h-40 bg-sal-navy/10 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-sal-red/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <Play className="text-accent-foreground ml-1" size={24} />
              </div>
            </div>
            <div className="p-4">
              <p className="font-bold text-sal-navy text-sm">{v.doctor}</p>
              <p className="text-muted-foreground text-xs">{v.specialty}</p>
              <p className="text-foreground text-sm mt-1">{v.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VideoSeries;
