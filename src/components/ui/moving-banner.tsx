"use client"

                    import Link from "next/link"
                    import { motion } from "framer-motion"
                    import templatesData from "../../../data/mock.json"

                    // Extract titles and create arrays for each row
                    const titles = templatesData.map((template) => template.title)
                    const topRowItems = [...titles, ...titles, ...titles] // Repeat to fill the row
                    const middleRowItems = [...titles, ...titles, ...titles]
                    const bottomRowItems = [...titles, ...titles, ...titles]

                    export default function MovingBanner() {
                        const scrollAnimation = (direction: "left" | "right", duration: number) => ({
                            x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
                            transition: { duration, repeat: Infinity, ease: "linear" },
                        });

                        return (
                            <section className="w-full py-6 md:py-8 overflow-hidden bg-background">
                                <div className="space-y-4">
                                    {/* Top Row - Moving Right */}
                                    <div className="relative">
                                        <motion.div
                                            className="flex"
                                            animate={scrollAnimation("right", 30)}
                                        >
                                            {[...topRowItems, ...topRowItems].map((item, index) => (
                                                <Link
                                                    key={index}
                                                    href="/generate"
                                                    className="flex-shrink-0 mx-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium whitespace-nowrap border border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer"
                                                >
                                                    {item}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    </div>

                                    {/* Middle Row - Moving Left */}
                                    <div className="relative">
                                        <motion.div
                                            className="flex"
                                            animate={scrollAnimation("left", 25)}
                                        >
                                            {[...middleRowItems, ...middleRowItems].map((item, index) => (
                                                <Link
                                                    key={index}
                                                    href="/generate"
                                                    className="flex-shrink-0 mx-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium whitespace-nowrap border hover:bg-secondary/80 transition-colors cursor-pointer"
                                                >
                                                    {item}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    </div>

                                    {/* Bottom Row - Moving Right (Slower) */}
                                    <div className="relative">
                                        <motion.div
                                            className="flex"
                                            animate={scrollAnimation("right", 35)}
                                        >
                                            {[...bottomRowItems, ...bottomRowItems].map((item, index) => (
                                                <Link
                                                    key={index}
                                                    href="/generate"
                                                    className="flex-shrink-0 mx-2 px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium whitespace-nowrap border hover:bg-accent/80 transition-colors cursor-pointer"
                                                >
                                                    {item}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    </div>
                                </div>
                            </section>
                        )
                    }