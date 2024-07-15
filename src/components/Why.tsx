import Banking from "/images/icon-online.svg";
import Budgeting from "/images/icon-budgeting.svg";
import Onboarding from "/images/icon-onboarding.svg";
import API from "/images/icon-api.svg";
import { motion } from "framer-motion";

const data = [
    {
        title: "Online Banking",
        description: `Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world.`,
        image: Banking,
    },
    {
        title: "Simple Budgeting",
        description: `See exactly where your money goes each month. Receive notifications when you’re 
  close to hitting your limits.`,
        image: Budgeting,
    },
    {
        title: "Fast Onboarding",
        description: `We don’t do branches. Open your account in minutes online and start taking control 
  of your finances right away.`,
        image: Onboarding,
    },
    {
        title: "Open API",
        description: `Manage your savings, investments, pension, and much more from one account. Tracking 
  your money has never been easier.`,
        image: API,
    },
] as {
    title: string;
    description: string;
    image: string;
}[];

export default function Why({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={className} {...props}>
            <h2 className="font-public text-3xl text-dark_blue lg:w-fit w-48 lg:text-left text-center">
                Why choose Easybank?
            </h2>
            <p className="font-public text-grayish_blue lg:w-[45vw] py-6 lg:text-left text-center lg:px-0 px-4">
                We leverage Open Banking to turn your bank account into your
                financial hub. Control your finances like never before.
            </p>
            <div className="lg:grid lg:grid-cols-4 gap-4 py-8">
                {data.map((d, index) => (
                    <motion.div
                        className="flex flex-col lg:items-start items-center lg:pb-0 pb-12"
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
                        <img
                            src={d.image}
                            alt={d.title + " image"}
                            className="size-16"
                        />
                        <h3 className="font-public text-dark_blue text-xl lg:py-6 py-4">
                            {d.title}
                        </h3>
                        <p className="font-public text-grayish_blue lg:text-left text-center lg:px-0 px-4">
                            {d.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
