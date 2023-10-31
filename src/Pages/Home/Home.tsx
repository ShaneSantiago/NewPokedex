import {
  Box,
  VStack,
  Grid,
  GridItem,
  Text,
  Image,
  HStack,
  Divider,
  Stack,
  Progress,
  Button,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import bg2 from "../../assets/bg2.png";
import {
  StatName,
  capitalizeFirstLetters,
  translateText,
} from "../../Components/Uteis/formatText";
import {
  attributeColors,
  getColorForAttribute,
  pokemonsType,
} from "../../Components/Uteis/pokemonType";
import Filter from "../../Components/Filter/Filter";
import FilterButton from "../../Components/Filter/FilterButton";
import logoPokemon from "../../assets/logoPokemon.png";
import loadingPage from "../../assets/loadingPage.gif";
import { Pokemon } from "../../Components/Types/Types";

const HomePage = () => {
  const [result, setResult] = useState<any>([]);
  const [filterType, setFilterType] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [visiblePokemon, setVisiblePokemon] = useState<number>(20);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    listPokemons();
  }, []);

  useEffect(() => {
    const newList: any = [];

    result.forEach((item: any) => {
      axios
        .get(item.url)
        .then((res) => {
          newList.push(res.data);
          if (newList.length === 121) {
            const orderedList = newList.sort(
              (a: any, b: any) => a.order - b.order
            );
            setResult(orderedList);
          }
        })
        .catch((erro) => {});
    });
  }, [result]);

  const listPokemons = () => {
    setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=121`)
      .then((res) => {
        setResult(res.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Erro", error);
      });
  };

  function getPokemonTypes(pokemonList: Pokemon[]) {
    const uniqueTypes = new Set();

    pokemonList.forEach((pokemon) => {
      if (pokemon.types) {
        pokemon.types.forEach((type) => {
          uniqueTypes.add(type.type.name);
        });
      }
    });

    return Array.from(uniqueTypes);
  }
  const uniqueTypes = getPokemonTypes(result);

  return (
    <VStack
      spacing={4}
      align="center"
      backgroundImage={`url(${bg2})`}
      backgroundPosition="center center"
      backgroundSize="cover"
      backgroundAttachment="fixed"
      h="100%"
      minH="100vh"
      _hover={{
        backgroundImage: `url(${bg2})`,
        transition: "background-image 2s",
      }}
    >
      {" "}
      <Box mt="10px">
        <Image src={logoPokemon} alt="logo" w="300px" />
      </Box>
      <HStack w="50%" margin="0 auto" mt="50px">
        <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterButton uniqueTypes={uniqueTypes} setFilterType={setFilterType} />
      </HStack>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={4}
      >
        {result
          .filter((pokemon: Pokemon) => {
            if (filterType === null) {
              return true;
            } else {
              return (
                pokemon.types &&
                pokemon.types.some(
                  (type: any) => type.type.name.toLowerCase() === filterType
                )
              );
            }
          })
          .filter((pokemon: Pokemon) => {
            if (searchTerm === "") {
              return true;
            } else {
              return pokemon.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            }
          })
          .map((pokemon: Pokemon, index: any) => (
            <GridItem key={index}>
              <Box
                width="350px"
                borderWidth="1px"
                borderRadius="5px"
                h="450px"
                boxShadow="md"
                backgroundColor="#060b28"
                textAlign="center"
                m="0"
                p="0"
              >
                <Box
                  backgroundColor={
                    pokemon.types
                      ? pokemonsType(pokemon.types[0].type.name)
                      : "#ccc"
                  }
                  h="150px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box
                    flexDirection="column"
                    display="flex"
                    justifyContent="start"
                  >
                    <Text color="white" fontWeight="500">
                      {pokemon.name.toUpperCase()}
                    </Text>
                  </Box>
                  {pokemon.sprites?.other?.dream_world?.front_default && (
                    <Image
                      h="150px"
                      mt="80px"
                      src={pokemon.sprites.other.dream_world.front_default}
                      alt={pokemon.name}
                    />
                  )}
                </Box>
                <HStack
                  display="flex"
                  justifyContent="space-between"
                  m="10"
                  mb="80px"
                >
                  <Box
                    display="flex"
                    alignItems="start"
                    flexDirection="column"
                    mt="20px"
                  >
                    <Text fontWeight="500" color="white">
                      Status
                    </Text>
                    <Divider borderColor="white" w="100px" />
                    <Box h="200px">
                      {pokemon.stats?.map((status) => {
                        const statName = status.stat.name as StatName;

                        if (statName.includes("special")) return null;

                        return (
                          <Box
                            display="flex"
                            alignItems="center"
                            key={statName}
                          >
                            <Text m="10px 10px 10px 0px" color="white">
                              {translateText(statName)}:
                            </Text>
                            <Progress
                              flex="1"
                              size="xs"
                              borderRadius="20px"
                              value={status.base_stat}
                              width={100}
                              colorScheme={getColorForAttribute(statName)}
                            />
                          </Box>
                        );
                      })}
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="start"
                    flexDirection="column"
                    mt="20px"
                  >
                    <Text fontWeight="500" color="white">
                      Habilidades
                    </Text>
                    <Divider borderColor="white" w="100px" />
                    <Box h="200px">
                      {pokemon.abilities &&
                        pokemon.abilities.map((ability) => (
                          <Box key={ability.ability.name}>
                            <Text color="white">{ability.ability.name}</Text>
                          </Box>
                        ))}
                      <Stack spacing={2} mt="10px">
                        {pokemon.types?.map((type, index) => (
                          <Text
                            key={index}
                            backgroundColor={pokemonsType(type.type.name)}
                            textAlign="center"
                            p="2px"
                            borderRadius="10px"
                            color="#fff"
                          >
                            {type.type.name.toUpperCase()}
                          </Text>
                        ))}
                      </Stack>
                    </Box>
                  </Box>
                </HStack>
              </Box>
            </GridItem>
          ))}
      </Grid>
    </VStack>
  );
};

export default HomePage;
