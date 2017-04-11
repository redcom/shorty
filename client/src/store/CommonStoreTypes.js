// @flow

// Stores
export type Link = {
  id: number,
  url: string,
  shortUrl: string,
};

export type Links = Array<Link>;

export type ErrorsType = Object;

// State
export type State = {
  links: Links,
  error: ErrorsType,
};
