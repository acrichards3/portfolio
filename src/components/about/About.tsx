import React from 'react';
import me from '../../images/me.jpg';
import styles from './About.module.scss';

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <img src={me} alt="Profile" className={styles.profilePic} />
        <h1 className={styles.title}>More About Me</h1>
      </div>
      <div className={styles.row}>
        <div className={styles.content}>
          <div className={styles.rowSub}>
            <h2 className={styles.subtitle}>My Background</h2>
          </div>
          <p className={styles.body}>
            In 2018 I graduated from Ardrey Kell High School in Charlotte, NC
            where I went on to attend some college at the University of
            Mississippi as a computer science major. I knew that coding was
            something that interested me but I wasn’t sure what kind of coding I
            would like. I eventually decided on web development because it felt
            a lot like playing with legos to me since you can actually see what
            you are building piece by piece until your website is finished. I
            wasn’t very good at first just like any beginner so I started a
            coding blog on Medium.com where I wrote about the things I learned
            about web development. To my surprise, my posts ended up gathering
            thousands of reads and I became a top writer on Medium for a short
            time. In the more recent past, I attended Nucamp’s Full Stack Web
            and Mobile Development Bootcamp where I graduated with honors. This
            is where I really started to learn to code and it was at this point
            where I was able to take what was in my head and turn it into an
            actual piece of software. That was a very big moment for me and ever
            since then, web development has become easier to understand.
          </p>
          <div className={styles.rowSub}>
            <h2 className={styles.subtitle}>The Present</h2>
          </div>
          <p className={styles.body}>
            Currently, I live in Chapel Hill, NC where I am continuing to become
            a better software developer. One of the main things that I am
            currently trying to master is TypeScript. For the most part,
            TypeScript is pretty easy to understand and it’s actually been
            extremely helpful when it comes to catching bugs in my applications
            before they become a big deal. The hard part, however, happens when
            you make TypeScript unhappy. I’ve found that understanding the error
            messages TypeScript throws at you can be pretty difficult but
            nonetheless, I am still learning how everything works. Aside from
            TypeScript, I continue to work on my projects to get as much
            development experience as possible and I’ve recently started
            competing in weekly coding challenges on LeetCode which has been a
            huge help in helping me become better at writing algorithms.
          </p>
          <div className={styles.rowSub}>
            <h2 className={styles.subtitle}>Future Adventures</h2>
          </div>
          <p className={styles.body}>
            For quite a while now, I’ve had the goal of one day being able to
            start a project and spend the majority of my time in the code editor
            actually writing code instead of trying to fix something that is
            broken or looking up how to do something on Google. While, I’m sure
            that this is still far away, I’m actually pretty surprised at how
            much better I’ve become in the time that I have been coding
            seriously. In the further future, I’d love to learn Python and C++
            and do things with machine learning as this is another field in
            programming that has always had my interest. Before that happens
            however, my number 1 goal for the next 5 years is to become an
            expert in web development.
          </p>
        </div>
      </div>
    </div>
  );
}
