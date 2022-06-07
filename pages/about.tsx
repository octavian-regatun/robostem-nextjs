import Header from "../src/components/AboutPage/Header";
import IOButton from "../src/components/IOButton";
import ContentDivider from "../src/components/ContentDivider";
import Heading from "../src/components/Heading";
import Layout from "../src/components/Layout";
import PageContent from "../src/components/PageContent";
import SimpleText from "../src/components/SimpleText";
import Head from "next/head";

function AboutNextPage() {
  return (
    <>
    <Head>
      <title>RoboSTEM - About</title>
    </Head>
    <Layout>
      <PageContent title="About">
        <Header />
        <ContentDivider />
        <Heading variant="h4" align="left">
          Why RoboSTEM?
        </Heading>
        <ContentDivider />
        <SimpleText>
          &emsp;The analysis documents for the European educational policies
          have at their center the preoccupations of educational systems to
          develop STEM skills in students and organize learning activities in
          schools which are practical, interdisciplinary and innovative to
          exercise them. A development of active and innovative,
          interdisciplinary and collaborative methodology is a must, to promote
          the development of Maths, Sciences and technologies. Developing
          devices based on microcontrollers and future technologies promotes
          practical study experiences, interdisciplinary professional
          development and development of digital VET skills. EU Commission is
          constantly recommending the increase in the level of educational
          digitalization and integrating the new technologies in the educational
          process. Raising student motivation through usage of modern teaching
          methods that encourage the application of new technologies in
          practical work environments is required. It is through the joined
          effort of engineers- IT specialists - STEM teachers that we will
          create the basis for the developmnet of basic skills and transversal
          skills required on the European Labor market for future jobs.
        </SimpleText>
        <Heading variant="h4" align="left">
          Priorities and Topics
        </Heading>
        <ContentDivider />
        <SimpleText>
          &emsp;HORIZONTAL: Open education and innovative practices in a digital
          era
          {<br />}
          &emsp;VET: Initial and continuous professional development of VET
          teachers, trainers and mentors in both school and work-based settings
          {<br />}
          &emsp;HORIZONTAL: Supporting individuals in acquiring and developing
          basic skills and key competences
        </SimpleText>
        <Heading variant="h4" align="left">
          Topics addressed by the project
        </Heading>
        <ContentDivider />
        <SimpleText>
          &emsp;Cooperation between educational institutions and business
          {<br />}
          &emsp;ICT - new technologies - digital competences
          {<br />}
          &emsp;New innovative curricula/educational methods/development of
          training courses
        </SimpleText>
        <Heading variant="h4" align="left">
          The objectives of the project
        </Heading>
        <ContentDivider />
        <SimpleText>
          &emsp;1. Identifying means to project, program and use embedded
          systems for educational purposes
          {<br />}
          &emsp;2. Elaborating curricular resources centered on the use of STEM
          skills to accomplish devices based on microcontrollers
          {<br />}
          &emsp;3. Implementing learning activities in STEM school subjects with
          the view of familiarizing students with the new technologies based on
          microcontrollers
          {<br />}
          &emsp;4. Creating a study platform for the free access to curricular
          resources created on the theme of developing applications with
          microcontrollers.
          {<br />}
          &emsp;5. Developing new EU partnerships, with transfer of good
          practices and innovative curricular resources between the institutions
          that target the development of STEM skills.
        </SimpleText>
        <Heading variant="h4" align="left">
          Intellectual Outputs
        </Heading>
        <ContentDivider />
        <SimpleText>
          {<IOButton number={1} />}
          Module on application design
          {<br />}
          {<IOButton number={2} />}
          Module on microcontroller programming
          {<br />}
          {<IOButton number={3} />}
          Module on the use of devices with microcontrollers in educational
          projects (Scientific)
          {<br />}
          {<IOButton number={4} />}
          Methodological Guide of the development of STEM education using
          applications with microcontrollers and platform piloting
          {<br />}
          {<IOButton number={5} />}
          Toolkit with educational scenarios for the development of basic and
          transversal skills in VET institutes
        </SimpleText>
        <Heading variant="h4" align="left">
          Aims and Target Groups
        </Heading>
        <ContentDivider />
        <SimpleText>
          &emsp;Raising student motivation through through the application of
          new technologies in practical work environments. It is through the
          joined effort of engineers- IT specialists - STEM teachers that we can
          create the basis for the developmnet of basic skills and transversal
          skills required on the European Labor market for future jobs.
          {<br />}
          {<br />}
          &emsp;VET trainers and students and professionals from the profile
          companies.
          {<br />}
          &emsp;STEM teachers from partner schools
          {<br />}
          &emsp;200 students who will pilot the platform in the 3 schools
          {<br />}
          &emsp;150 users enrolled on the platform
          {<br />}
          &emsp;60 STEM teachers in project countries, who will join the
          platform during the dissemination stage
          {<br />}
          &emsp;500 people will receive through MailChimp the 4 newsletters
          {<br />}
          &emsp;120 participants at the Multiplication Events
          {<br />}
          &emsp;A greater target group through the implementation of the OER
          uploaded on the platform.
        </SimpleText>
      </PageContent>
    </Layout>
    </>
  );
}

export default AboutNextPage;
