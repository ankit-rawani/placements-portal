import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';

export default function Home() {
    const textColor = useColorModeValue('blue.900', 'white');
    return (
        <Box minH="100vh" h="100%">
            <Flex justifyContent="space-between">
                <Flex p="150px 100px" direction="column">
                    <Text
                        fontSize="24px"
                        lineHeight="24px"
                        casing="uppercase"
                        letterSpacing="4px"
                    >
                        Welcome to
                    </Text>
                    <Text
                        fontSize="100px"
                        lineHeight="100px"
                        fontWeight="700"
                        color={textColor}
                    >
                        Placements Portal
                    </Text>
                    <Text w="500px" mt="40px">
                        One stop place for your Campus placement.
                    </Text>
                </Flex>
            </Flex>
        </Box>
    );
}
