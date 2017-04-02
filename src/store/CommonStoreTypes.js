// @flow

// Stores
export type Link = {
  id: number,
  url: string,
  shortUrl: string,
};

export type Links = Array<Link>;

// State
export type State = {
  links: Links,
};
