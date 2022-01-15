//
export interface GithubUserResponse {
  readonly avatar_url: string;
  readonly events_url: string;
  readonly followers_url: string;
  readonly following_url: string;
  readonly gists_url: string;
  readonly gravatar_id: string;
  readonly html_url: string;
  readonly id: number;
  readonly login: string;
  readonly node_id: string;
  readonly organizations_url: string;
  readonly received_events_url: string;
  readonly repos_url: string;
  readonly score: number;
  readonly site_admin: boolean;
  readonly starred_url: string;
  readonly subscriptions_url: string;
  readonly type: string;
  readonly url: string;
}

export interface GithubUserDetailResponse extends GithubUserResponse {
  name: string;
  company: string | null;
  blog: string;
  location: string;
  email: string | null;
  hireable: boolean;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

//
export interface GithubUserApiResponse {
  total_count: number;
  incomplete_results: boolean;
  items: GithubUserResponse[];
}
