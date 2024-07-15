import Currency from "/images/image-currency.jpg";
import Restaurant from "/images/image-restaurant.jpg";
import Plane from "/images/image-plane.jpg";
import Confetti from "/images/image-confetti.jpg";
import { motion } from "framer-motion";

const articles = [
    {
        title: "Receive money in any currency with no fees",
        author: "By Claire Robinson",
        description: `Receive money in any currency with no fees
  The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …`,
        image: Currency,
    },
    {
        title: "Treat yourself without worrying about money",
        author: "By Wilson Hutton",
        description: `Our simple budgeting feature allows you to separate out your spending and set 
  realistic limits each month. That means you …`,
        image: Restaurant,
    },
    {
        title: "Take your Easybank card wherever you go",
        author: "By Wilson Hutton",
        description: `We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
  while you’re abroad. We’ll even show you …`,
        image: Plane,
    },
    {
        title: "Our invite-only Beta accounts are now live!",
        author: "By Claire Robinson",
        description: `After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
  It’s easy to request an invite through the site ...`,
        image: Confetti,
    },
] as {
    image: string;
    title: string;
    author: string;
    description: string;
}[];

export default function Article(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props}>
            <h2 className="text-3xl font-public text-dark_blue lg:text-left text-center font-medium">
                Latest Articles
            </h2>
            <div className="lg:grid lg:grid-cols-4 gap-6 py-8 ">
                {articles.map((d, index) => (
                    <motion.div
                        className="rounded-md overflow-hidden bg-white group mb-4 lg:pb-0 pb-6"
                        key={d.title}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.1 * index,
                            type: "spring",
                        }}
                        viewport={{ once: true }}
                    >
                        <div className="w-full aspect-[4/3] overflow-hidden">
                            <img
                                src={d.image}
                                alt={d.title + " image"}
                                className="w-full aspect-[4/3] object-cover  group-hover:scale-110 transition duration-500"
                            />
                        </div>
                        <div className="p-4">
                            <span className="font-public text-xs text-grayish_blue">
                                {d.author}
                            </span>
                            <h3 className="font-public text-dark_blue leading-6 py-3 transition cursor-pointer hover:text-lime_green">
                                {d.title}
                            </h3>
                            <p className="font-public text-grayish_blue text-xs">
                                {d.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
