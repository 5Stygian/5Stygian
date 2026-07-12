import * as c from "@/app/components/index";
import { WBP1Name } from "@/app/globals";
import Link from "next/link";

export default function WorldHistory() {
  return (
    <>
      <c.TableOfContents />
      <c.Content
        domHeader={WBP1Name}
        subHeader="World History"
        egg={"I fucking love that this: {\" \"} is a way that you can insert spaces."}
      >
        <h1 id="time-periods">Time Periods</h1>
        <h2 id="the-age-of-true-unity">The Age of True Unity</h2>
        <p>
          For almost 500 years, the Humans and the Anthrans had lived and prospered together, building
          a grand civilization based on the principles of united progress and kindness towards all. They
          utilized the <Link href="/papers/wbp1/the-arcoil">Arcoil</Link> to create advanced infrastructure.
        </p>
        <p className="mb-0!">
          However, disagreements between how the Humans and Anthrans wanted to govern the Arcoil began
          to emerge, as well as distrust towards the opposite species. Soon enough, war broke out 
          between the two schools of thought. The Anthrans eventually found themselves backed into a
          corner, so they came up with a last ditch plan to end the war. The plan had two major components:
        </p>
        <c.List items={[
          "Transport the Anthrans to an alternate dimension.",
          "Erase all knowledge of the Arcoil, and anything relating to it."
        ]} />
        <p>
          The execution of this plan had been near perfection. But, some Humans had discovered this plan,
          and were able to protect themselves from its effects.
          Now, the war was over, and the Anthrans had survived. This event is called "The Expunging".
        </p>
        <h2 id="post-expunging">Post Expunging</h2>
        <p>
          Anthran and Human society evolved in a similar fashion as to how they did in our reality.
          However, The Expunging was not a perfect process. Some Humans had been taken with the Anthrans
          to the new dimension with their knowledge of the Arcoil intact. These Humans gathered into a
          secret society and hid themselves away from the world as Anthran society developed freely.
        </p>
        <h3 id="the-secret-society-of-humanity">The Secret Society of Humanity</h3>
        <p>
          The Humans had banded together in order to survive and maintain the knowledge of the Arcoil.
          Their objective was to find a way to transport themselves to the dimension that the Anthrans
          transported the humans to so that they wouldn't have to live in hiding. But, they learned that
          to perform this ritual, they would need at least one Anthran with a strong affinity towards
          the Arcoil in order to perform it.
        </p>
      </c.Content>
    </>
  );
}
