"use client";
import { useState, useEffect } from "react";
import CountUp from "react-countup";

const stats = [
    {
        num: 2,
        text: "Years of experience"
    },
    {
        num: 5,
        text: "Projects completed"
    },
    {
        num: 4,
        text: "Technologies mastered"
    },
];

const Stats = () => {
    const [commitCount, setCommitCount] = useState(0);
    const username = "leejeaoh";

    //fetch all repositories and sum up commits
    useEffect(() => {
        const fetchTotalCommits = async () => {
            try {
                //fetch all repositories for the user
                const repoResponse = await fetch(`https://api.github.com/users/${username}/repos`);
                const repos = await repoResponse.json();

                let totalCommits = 0;

                //iterate through each repository to get commit counts
                for (let repo of repos) {
                    const commitResponse = await fetch(`https://api.github.com/repos/${username}/${repo.name}/commits`);
                    const commits = await commitResponse.json();
                    totalCommits += commits.length;
                }

                //set the total commit count
                setCommitCount(totalCommits);
            } catch (error) {
                console.error("Error fetching total commit count:", error);
            }
        };

        fetchTotalCommits();
    }, []);

    return (
        <section>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {/* Predefined Stats */}
                {stats.map((item, index) => (
                    <div key={index} className="stat">
                        <CountUp
                            end={item.num}
                            duration={5}
                            delay={2}
                            className="text-4xl xl:text-6xl font-extrabold"
                        />
                        <p className="mt-2 text-lg xl:text-xl">{item.text}</p>
                    </div>
                ))}

                {/* GitHub Commit Count */}
                <div className="stat">
                    <CountUp
                        end={commitCount}
                        duration={5}
                        delay={2}
                        className="text-4xl xl:text-6xl font-extrabold"
                    />
                    <p className="mt-2 text-lg xl:text-xl">Total Code commits</p>
                </div>
            </div>
        </section>
    );
};

export default Stats;
