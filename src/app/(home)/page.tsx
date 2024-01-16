import { CarouselPosters } from "@/components/carousel-poster";
import { Container } from "@/components/constainer";
import { Content } from "@/components/content";
import { SubTitle } from "@/components/sub-title";
import { fetchAnimes, fetchTopAnimes } from "@/services/fetch";

enum GenresType {
  Action = 1,
  Adventure = 2,
  AvantGarde = 5,
  AwardWinning = 46,
  BoysLove = 28,
  Comedy = 4,
  Drama = 8,
  Fantasy = 10,
  GirlsLove = 26,
  Gourmet = 47,
  Horror = 14,
  Mystery = 7,
  Romance = 22,
  SciFi = 24,
  SliceOfLife = 36,
  Sports = 30,
  Supernatural = 37,
  Suspense = 41,
  Ecchi = 9,
  Erotica = 49,
  Hentai = 12,
  AdultCast = 50,
  Anthropomorphic = 51,
  CGDCT = 52,
  Childcare = 53,
  CombatSports = 54,
  Crossdressing = 81,
  Delinquents = 55,
  Detective = 39,
  Educational = 56,
  GagHumor = 57,
  Gore = 58,
  Harem = 35,
  HighStakesGame = 59,
  Historical = 13,
  IdolsFemale = 60,
  IdolsMale = 61,
  Isekai = 62,
  Iyashikei = 63,
  LovePolygon = 64,
  MagicalSexShift = 65,
  MahouShoujo = 66,
  MartialArts = 17,
  Mecha = 18,
  Medical = 67,
  Military = 38,
  Music = 19,
  Mythology = 6,
  OrganizedCrime = 68,
  OtakuCulture = 69,
  Parody = 20,
  PerformingArts = 70,
  Pets = 71,
  Psychological = 40,
  Racing = 3,
  Reincarnation = 72,
  ReverseHarem = 73,
  RomanticSubtext = 74,
  Samurai = 21,
  School = 23,
  Showbiz = 75,
  Space = 29,
  StrategyGame = 11,
  SuperPower = 31,
  Survival = 76,
  TeamSports = 77,
  TimeTravel = 78,
  Vampire = 32,
  VideoGame = 79,
  VisualArts = 80,
  Workplace = 48,
  Josei = 43,
  Kids = 15,
  Seinen = 42,
  Shoujo = 25,
  Shounen = 27,
}

export default async function Home() {
  const animes = await fetchTopAnimes();
  const animeToAdventure = await fetchAnimes(GenresType.Adventure);
  const animeToIsekai = await fetchAnimes(GenresType.Isekai);
  //  const animeToRomance = await fetchAnimes(GenresType.Romance);
  //  const animeToAction = await fetchAnimes(GenresType.Action);
  //const animeToSchool = await fetchAnimes(GenresType.School);
  const animeToComedy = await fetchAnimes(GenresType.Comedy);

  return (
    <Container>
      <Content>
        <SubTitle>Em alta</SubTitle>
        <CarouselPosters posters={animes} />

        <SubTitle>Isekai</SubTitle>
        <CarouselPosters posters={animeToIsekai} />

        <SubTitle>Comedia</SubTitle>
        <CarouselPosters posters={animeToComedy} />

        <SubTitle>Romance</SubTitle>

        <SubTitle>Ação</SubTitle>
        <SubTitle>Aventura</SubTitle>
        <CarouselPosters posters={animeToAdventure} />
        <SubTitle>School</SubTitle>
      </Content>
    </Container>
  );
}
