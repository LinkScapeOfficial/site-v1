import { Box, Container, Heading, Text, List, ListItem, Link, Flex, Image } from 'theme-ui';
import { FaGithub, FaGoogle, FaFigma, FaZoom, FaKey, FaEnvelope } from 'react-icons/fa';

const App = () => {
  return (
    <Container>
      <Heading as="h1" sx={{ textAlign: 'center', mt: 4, mb: 4 }}>
        LinkScape Summer of Learning
      </Heading>

      <Heading as="h2">Objective and Vision</Heading>
      <Text>
        The LinkScape Summer of Learning program aims to provide one-on-one mentor support for
        students with no computer experience, helping them learn basic computer skills, including
        Python programming, front-end development, open-source software, APIs, and more. Through
        our project, students will be able to master basic computer skills in a short time and join
        LinkScape as a member upon completion. Members participating in this project will receive
        free subscriptions to LinkScape's GitHub Team, Google Workspace, Figma, Zoom Pro,
        1Password, and Postman.
      </Text>

      <Heading as="h2">Project Planning</Heading>
      <Box>
        <Heading as="h3">1. Recruitment and Selection</Heading>
        <List>
          <ListItem>Start date: April 1, 2023</ListItem>
          <ListItem>End date: June 30, 2023</ListItem>
          <ListItem>
            Eligibility: Students with zero experience in computer and programming and good English
            proficiency
          </ListItem>
          <ListItem>
            Selection process:
            <List as="ol" styleType="decimal">
              <ListItem>Fill out the application form</ListItem>
              <ListItem>Undergo a short online interview</ListItem>
              <ListItem>Confirm the admission list</ListItem>
            </List>
          </ListItem>
        </List>

        <Heading as="h3">2. Learning and Practice</Heading>
        <List>
          <ListItem>Date: July 1, 2023 to August 31, 2023</ListItem>
          <ListItem>
            Learning content:
            <List as="ol" styleType="decimal">
              <ListItem>Python programming basics</ListItem>
              <ListItem>Front-end development (HTML, CSS, JavaScript)</ListItem>
              <ListItem>Open-source software development</ListItem>
              <ListItem>API usage and development</ListItem>
            </List>
          </ListItem>
          <ListItem>
            Learning methods:
            <List as="ol" styleType="decimal">
              <ListItem>Daily one-on-one online tutoring</ListItem>
              <ListItem>Self-study resources, such as tutorials, videos, etc.</ListItem>
              <ListItem>Participate in weekly offline exchange activities</ListItem>
            </List>
          </ListItem>
          <ListItem>
            Practice project: Each student must complete a practical project during their learning
            period to consolidate their computer skills. Project requirements can be determined
            based on the student's interests and mentor's suggestions.
          </ListItem>
        </List>

        <Heading as="h3">3. Communication and Reporting</Heading>
        <List>
          <ListItem>Students must report their learning progress to their mentors daily</ListItem>
          <ListItem>
            Weekly fixed-time LinkScape offline communication events to discuss learning progress,
            solve problems, and share experiences
          </ListItem>
        </List>

        <Heading as="h3">4. Project Submission and Evaluation</Heading>
        <List>
          <ListItem>Date: August 31, 2023</ListItem>
          <ListItem>
            Content: Each student must submit their practical project through GitHub, including
            source code, project documentation, and a short demonstration video
          </ListItem>
          <ListItem>
            Evaluation criteria: Project completion, innovation, practicality, and code quality
          </ListItem>
          <ListItem>
            Evaluation results: Based on the project evaluation results, outstanding students will
            have the opportunity to join LinkScape as official members
          </ListItem>
        </List>
      </Box>

      <Heading as="h2">Resources and Support</Heading>
      <Text>
        All students participating in this project will enjoy the following resources and support
        for free:
      </Text>
      <Flex sx={{ flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
        <ResourceCard
          icon={<FaGithub />}
          title="GitHub"
          description="Students will receive a free GitHub Team subscription, allowing them to create and host unlimited code repositories for code hosting, version control, and collaborative development."
        />
        <ResourceCard
          icon={<FaGoogle />}
          title="Google Workspace"
          description="Students will receive a free Google Workspace subscription, including Gmail, Google Drive, Google Docs, Google Sheets, and other tools for online collaboration and file sharing."
        />
        <ResourceCard
          icon={<FaFigma />}
          title="Figma"
          description="Students will receive a free Figma subscription, enabling them to create, edit, and share UI design prototypes online."
        />
        <ResourceCard
          icon={<FaZoom />}
          title="Zoom Pro"
          description="Students will receive a free Zoom Pro subscription for high-quality video calls and online meetings."
        />
        <ResourceCard
          icon={<FaKey />}
          title="1Password"
          description="Students will receive a free 1Password subscription, allowing them to securely store and manage passwords for various accounts."
        />
        <ResourceCard
          icon={<FaEnvelope />}
          title="Postman"
          description="Students will receive a free Postman subscription, making it convenient to test and debug API interfaces."
        />
      </Flex>

      <Text>
        In addition to these resources and support, we will also provide students with a series of
        learning materials and reference resources, such as programming tutorials, example projects,
        learning roadmaps, etc., to help them learn computer skills smoothly.
      </Text>

      <Heading as="h2">Achievements and Prospects</Heading>
      <Text>
        Through this one-on-one computer mentor project, we hope to achieve the following goals:
      </Text>
      <List>
        <ListItem>
          Cultivate a group of students with no computer background, enabling them to master basic
          programming skills and computer knowledge.
        </ListItem>
        <ListItem>
          Provide students with a friendly and mutually supportive learning environment, enhancing
          their confidence and motivation to learn.
        </ListItem>
        <ListItem>
          Select outstanding students to join LinkScape, injecting new vitality and innovation into
          our non-profit organization.
        </ListItem>
      </List>
      <Text>
        Based on the successful implementation of the project, we will further improve and expand
        the program to meet the learning needs of more students. We look forward to contributing to
        computer education through this project and promoting the popularization and development of
        open-source software and technology.
      </Text>
    </Container>
      )
    }
    const ResourceCard = ({ icon, title, description }) => {
      return (
        <Box
          sx={{
            width: ['100%', '48%'],
            mb: 4,
            p: 3,
            borderWidth: '1px',
            borderColor: 'muted',
            borderStyle: 'solid',
            borderRadius: '4px',
          }}
        >
          <Flex sx={{ alignItems: 'center', mb: 2 }}>
            <Box sx={{ fontSize: 6, mr: 2 }}>{icon}</Box>
            <Heading as="h4">{title}</Heading>
          </Flex>
          <Text>{description}</Text>
        </Box>
      );
    };

    export default App;
