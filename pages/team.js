import {
    Avatar,
    BaseStyles,
    Badge,
    Box,
    Button,
    Card,
    Checkbox,
    Container,
    Flex,
    Grid,
    Heading,
    Input,
    Label,
    Link,
    NavLink,
    Radio,
    Select,
    Slider,
    Text,
    Textarea
} from 'theme-ui'

import Head from 'next/head'
import theme from '@hackclub/theme'
import Meta from '@hackclub/meta'

const Team = () => {
    return <div className='block'>
        <Heading variant="title" class="text-center">Leaders</Heading>
        <Grid
      columns={[1, 'auto auto auto']}
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        a: { color: 'muted', transition: 'color .125s ease-in-out' },
      }}
      gap={2}
    >
      <Card>
        <Container>
          <Avatar src="https://avatars.githubusercontent.com/u/62056970" />
          <Heading as="h2" variant="headline">
            Thomas Wu
          </Heading>
          <text variant="subtitle">
            Founder & CEO
          </text>
        </Container>
      </Card>
      <Card>
        <Container>
          <Avatar src="https://gcore.jsdelivr.net/gh/thomaswcy/linkscape.io@main/MeliLiu-Avatar.png" />
          <Heading as="h2" variant="headline">
            Meli Liu
          </Heading>
          <text variant="subtitle">
            Founder & COO & CFO
          </text>
        </Container>
        </Card>
      <Card>
        <Container>
          <Avatar src="https://gcore.jsdelivr.net/gh/thomaswcy/linkscape.io@main/JettChen-Avatar.jpg" />
          <Heading as="h2" variant="headline">
            Jett Chen
          </Heading>
          <text variant="subtitle">
            Co-founder & CTO
          </text>
        </Container>
      </Card>
    </Grid>  
    </div>
}

export default Team;
