import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {openSource, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

const createFallbackRepo = project => ({
  node: {
    name: project.name,
    url: project.url,
    primaryLanguage: null,
    updatedAt: null,
    project
  }
});

const selectFeaturedRepos = array =>
  openSource.featuredRepositories.map(project => {
    const githubRepo = Array.isArray(array)
      ? array.find(item => item?.node?.name === project.name)
      : null;
    return githubRepo
      ? {node: {...githubRepo.node, project}}
      : createFallbackRepo(project);
  });

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState(() =>
    openSource.featuredRepositories.map(createFallbackRepo)
  );
  // todo: remove useContex because is not supported
  const {isDark} = useContext(StyleContext);

  useEffect(() => {
    const getRepoData = () => {
      fetch("/profile.json")
        .then(result => {
          if (result.ok) {
            return result.json();
          }
          throw result;
        })
        .then(response => {
          setrepo(selectFeaturedRepos(response.data.user.pinnedItems.edges));
        })
        .catch(function (error) {
          console.error(
            `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
          );
          // Les cartes éditoriales locales restent affichées si GitHub répond mal.
        });
    };
    getRepoData();
  }, []);

  if (openSource.display) {
    return (
      <Suspense fallback={renderLoader()}>
        <section
          className="main github-projects-section"
          id="opensource"
          aria-labelledby="github-projects-title"
        >
          <header className="github-projects-header">
            <p className="github-projects-eyebrow">{openSource.eyebrow}</p>
            <h1 className="project-title" id="github-projects-title">
              {openSource.title}
            </h1>
            <p className="github-projects-subtitle">{openSource.subtitle}</p>
          </header>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => {
              if (!v) {
                console.error(
                  `Github Object for repository number : ${i} is undefined`
                );
              }
              return (
                <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
              );
            })}
          </div>
          <Button
            text={"Découvrir mon GitHub"}
            className="github-profile-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </section>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
