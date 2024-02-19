import styles from "./ServiceGrid.module.css";

const services = [
  {
    title: "Social Media",
  },
  {
    title: "Paid Ads",
  },
  {
    title: "Content Marketing",
  },
  {
    title: "Video Podcasts",
  },
  {
    title: "Video Editing",
  },
  {
    title: "Web Development",
  },
];

export default function ServiceGrid() {
  return (
    <section>
      <div className={styles.gridContainer}>
        {services.map((service) => (
          <div
            className="flex justify-center items-center h-36 uppercase w-full text-center p-4"
            key={service.title}
          >
            <h4>{service.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
