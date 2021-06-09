import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import H2 from 'gatsby-theme-carbon/src/components/markdown/H2';
import Link from 'gatsby-theme-carbon/src/components/Link';
import {Accordion, AccordionItem} from 'gatsby-theme-carbon/src/components/Accordion';

/**
 * React hook to retrieve list of pages from GraphQl
 *
 * @returns {*} GraphQl page list data
 * @constructor
 */
const useAllPages = () => {
  return useStaticQuery(
    graphql`
        query MyQuery {
            allSitePage(sort: {order: DESC, fields: path}) {
                nodes {
                    path
                    context {
                        frontmatter {
                            title
                        }
                    }
                }
            }
        }
    `
  )
}

/**
 * A component that lists out all of the pages within the website.
 *
 * @returns {*} list of pages
 * @constructor
 */
export const PageInventory = () => {
  const pages = useAllPages().allSitePage.nodes;
  const pagesOrganized = {};

  pages.forEach(page => {
      const paths = page.path.replace(/^\/|\/$/g, '').split('/');
      page.pageId = paths.pop();
      page.category = '/' + paths.join('/');
      
      if (!pagesOrganized[page.category]) {
          pagesOrganized[page.category] = [];
      }

      pagesOrganized[page.category].push(page);
  });
console.log(pagesOrganized);
  const keys = Object.keys(pagesOrganized);
  
   return (
    <>
      <H2>All pages ({pages.length})</H2>
      <Accordion>
        {keys.map(key => {
            const category = pagesOrganized[key];

            return (
                <AccordionItem open={true} key={key} title={`${key} (${category.length})`}>
                    <ul>
                        {category.map(({ path, context }) => {
                            const title = context.frontmatter.title;
                            return (
                                <li key={path}>
                                    <Link href={path} title={title}>{path}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </AccordionItem>
            );
        })}
      </Accordion>
    </>
  );
}