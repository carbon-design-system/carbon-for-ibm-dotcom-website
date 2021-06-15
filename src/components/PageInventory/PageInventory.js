import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import H2 from 'gatsby-theme-carbon/src/components/markdown/H2';
import { Link } from 'gatsby';
import { Accordion, AccordionItem } from 'gatsby-theme-carbon/src/components/Accordion';

import './index.scss';

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
                            createdOn
                            updatedOn
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
      page.category = paths.shift() || '/';
      
      if (!pagesOrganized[page.category]) {
        pagesOrganized[page.category] = [];
      }
      
      if (pagesOrganized[page.pageId]) {
        pagesOrganized[page.pageId].push(page);
      } else {
        pagesOrganized[page.category].push(page);
      }

  });

  const keys = Object.keys(pagesOrganized);
  
   return (
    <>
      <H2>All pages ({pages.length})</H2>
      <Accordion>
        {keys.map(key => {
            const category = pagesOrganized[key];

            return (
                <AccordionItem open={true} key={key} title={`${key} (${category.length})`}>
                    <table class="page-table page-inventory">
                        <tbody>
                            <tr>
                                <td></td>
                                <td>Created</td>
                                <td>Updated</td>
                            </tr>
                        {category.map(({ path, context }) => {
                            let title = path || '';
                            let updatedOn = '——';
                            let createdOn = '——';

                            if (context && context.frontmatter) {
                                title = context.frontmatter.title || title;
                                updatedOn = context.frontmatter.updatedOn || context.frontmatter.date || updatedOn;
                                createdOn = context.frontmatter.createdOn || createdOn;
                            }

                            return (
                                <tr key={path}>
                                    <td>
                                        <Link to={path} title={title}>{path}</Link>
                                    </td>
                                    <td>
                                        {createdOn}
                                    </td>
                                    <td>
                                        {updatedOn}
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </AccordionItem>
            );
        })}
      </Accordion>
    </>
  );
}