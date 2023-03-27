import { Box, Container, Flex, Heading, Text } from 'theme-ui';
import { github, google, gigma, terminal } from '@hackclub/icons';

const App = () => {
  return (
    <Container>
      <Heading as="h1" sx={{ textAlign: 'center', mt: 4, mb: 4, fontSize: '5rem' }}>
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
        <Box>
          <Box>Start date: April 1, 2023</Box>
          <Box>End date: June 30, 2023</Box>
          <Box>
            Elligibility: This program is open to both beginners and intermediate students who
            express a deep interest in technology and a high level of intellectual curiosity. 
              Students are expected to be proficient in English.
          </Box>
          <Box>
            Selection process:
            <Box as="ol" className="list-decimal pl-5">
              <Box as="li">Fill out the application form</Box>
              <Box as="li">Undergo a short online interview</Box>
              <Box as="li">Confirm the admission list</Box>
            </Box>
          </Box>
        </Box>

        <Heading as="h3">2. Learning and Practice</Heading>
        <Box>
          <Box>Date: July 1, 2023 to August 31, 2023</Box>
          <Box>
            Learning content:
            <Box as="ol" className="list-decimal pl-5">
              <Box as="li">Python programming basics</Box>
              <Box as="li">Front-end development (HTML, CSS, JavaScript)</Box>
              <Box as="li">Open-source software development</Box>
              <Box as="li">API usage and development</Box>
            </Box>
          </Box>
          <Box>
            Learning methods:
            <Box as="ol" className="list-decimal pl-5">
              <Box as="li">Daily one-on-one online tutoring</Box>
              <Box as="li">Self-study resources, such as tutorials, videos, etc.</Box>
              <Box as="li">Participate in weekly offline exchange activities</Box>
            </Box>
          </Box>
          <Box>
            Personal project. After the first four weeks of training, dilligent students will be able to 
              develop their own personal projects. To get you started, we will continue to provide support 
              through our mentors.
          </Box>
        </Box>

        <Heading as="h3">3. Communication and Reporting</Heading>
        <Box>
          <Box>Students must report their learning progress to their mentors daily</Box>
          <Box>
            Weekly fixed-time LinkScape offline communication events to discuss learning progress,
            solve problems, and share experiences
          </Box>
        </Box>

        <Heading as="h3">4. Project Submission and Evaluation</Heading>
        <Box>
          <Box>Date: August 31, 2023</Box>
          <Box>
            Content: Each student must submit their practical project through GitHub, including
            source code, project documentation, and a short demonstration video
          </Box>
          <Box>
            Evaluation criteria: Project completion, innovation, practicality, and code quality
          </Box>
          <Box>
            Evaluation results: Based on the project evaluation results, outstanding students will
            have the opportunity to join LinkScape as official members
          </Box>
        </Box>
      </Box>

      <Heading as="h2">Resources and Support</Heading>
      <Text>
        All students participating in this project will enjoy the following resources and support
        for free:
      </Text>
      <Flex sx={{ flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
        <ResourceCard
          icon={<github />}
          title="GitHub"
          description="Students will receive a free GitHub Team subscription, allowing them to create and host unlimited code repositories for code hosting, version control, and collaborative development."
        />
        <ResourceCard
          icon={<google />}
          title="Google Workspace"
          description="Students will receive a free Google Workspace subscription, including Gmail, Google Drive, Google Docs, Google Sheets, and other tools for online collaboration and file sharing."
        />
        <ResourceCard
          icon={<figma />}
          title="Figma"
          description="Students will receive a free Figma subscription, enabling them to create, edit, and share UI design prototypes online."
        />
        <ResourceCard
          icon={<terminal />}
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
      <Box>
        <Box>
          Cultivate a group of students with no computer background, enabling them to master basic
          programming skills and computer knowledge.
        </Box>
        <Box>
          Provide students with a friendly and mutually supportive learning environment, enhancing
          their confidence and motivation to learn.
        </Box>
        <Box>
          Select outstanding students to join LinkScape, injecting new vitality and innovation into
          our non-profit organization.
        </Box>
      </Box>
      <Text>
        Based on the successful implementation of the project, we will further improve and expand
        the program to meet the learning needs of more students. We look
        forward to contributing to
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
