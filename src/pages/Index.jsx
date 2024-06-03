import { Container, VStack, Box, Text, Heading, Image, SimpleGrid, IconButton, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const projects = [
  {
    title: "Project One",
    description: "A brief description of Project One.",
    image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MHx8fHwxNzE3NDUwOTAxfDA&ixlib=rb-4.0.3&q=80&w=1080",
    link: "#",
  },
  {
    title: "Project Two",
    description: "A brief description of Project Two.",
    image: "https://images.unsplash.com/photo-1609921141835-710b7fa6e438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MHx8fHwxNzE3NDUwOTAyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    link: "#",
  },
  {
    title: "Project Three",
    description: "A brief description of Project Three.",
    image: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlLWNvbW1lcmNlJTIwZGVzaWdufGVufDB8fHx8MTcxNzQ1MDkwMnww&ixlib=rb-4.0.3&q=80&w=1080",
    link: "#",
  },
];

const Index = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="center">
        <Heading as="h1" size="2xl">
          Product Design Portfolio
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Welcome to my portfolio. Here are some of my recent projects.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} width="100%">
          {projects.map((project, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={project.image} alt={project.title} />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>
                  {project.title}
                </Heading>
                <Text mb={4}>{project.description}</Text>
                <Link href={project.link} color="teal.500" isExternal>
                  View Project
                </Link>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        <VStack spacing={4} align="center">
          <Heading as="h2" size="lg">
            Contact Me
          </Heading>
          <Text>If you would like to get in touch, feel free to reach out through any of the platforms below.</Text>
          <VStack spacing={4} direction="row">
            <Link href="https://github.com" isExternal>
              <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
            </Link>
            <Link href="mailto:your-email@example.com" isExternal>
              <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" />
            </Link>
          </VStack>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
