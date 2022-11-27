import { useUser } from "../../../hooks/useUser";

import { Container } from "./styles";

import { BiGitRepoForked, BiStar, BiLinkAlt } from "react-icons/bi";
import { useEffect, useState } from "react";

export function Main() {
  const { repos } = useUser();
  const [reposList, setReposList] = useState(repos);
  const [search, setSearch] = useState("");
   /**
     * Filtering repositories by name
     */
  useEffect(() => {
    let filtered = repos;
      filtered = filtered.filter((repo) =>
        repo.name.toLowerCase().includes(search.toLowerCase())
      );
    setReposList(filtered);
  }, [repos, search]);

  return (
    <Container>
      <div className="search">
      <input type="text" placeholder="Insert Repository Name" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <ul>
        {reposList && reposList.length !==0 ? reposList.map((repo) => {
          return (
            <li key={repo.id}>
              <h1>{repo.name}</h1>
              <div className="desc-link">
                <span>{repo.description}</span>
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  <BiLinkAlt size={16} />
                </a>
              </div>
              <div className="fork-star">
                <BiGitRepoForked size={16} /> {repo.forks_count}
                <BiStar size={16} /> {repo.stargazers_count}
              </div>
            </li>
          );
        }) : <p>Sorry the repository you are searching for does not exist</p>}
      </ul>
    </Container>
  );
}