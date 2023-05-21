import Head from "next/head";
import { Header } from "../components/searches/Header";
import { API_KEY, CONTEXT_KEY } from "../../keys";
import { useRouter } from "next/router";
import { SearchResults } from "../components/searches/SearchResults";

export default function Search({ results }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>

      <Header />

      <SearchResults results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const usedummyData = false;
  const startIndex = context.query.start || "0";

  const data = usedummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
