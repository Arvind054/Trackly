export type WebsiteType = {
    id: number,
    websiteId: string,
    domain:string,
    timeZone: string,
    enabledLocalhostTracking:boolean,
    userEmail: string,
};

export type HourlyVisitorsType = {
    count: number,
    date: string,
    hour: number,
    hourLabel: string,
};
export type DailyVisitorsType = {
   date: string,
   count: number,
};
export type ReferralsType = {
  domainName: string,
  uv: number,
  name: string
};
export type RefParamsType = {
    name:string,
    uv: number
}
export type DeviceType = {
    name: string,
    uv: number,
    image: string
}
export type OSType = {
    name: string,
    uv: number,
    image: string,
}
export type BrowserType = {
    name: string,
    uv: number,
    image: string,
}
export type AnalyticsType = {
  avgActiveTime: number,
  totalActiveTime:number,
  totalSessions: number,
  totalVisitors: number,
  hourlyVisitors: HourlyVisitorsType[],
  dailyVisitors: DailyVisitorsType[],
  referrals: ReferralsType[],
  refParams: RefParamsType[],
  countries: string[],
  cities: [],
  regions: [],
  devices: DeviceType[],
  os: OSType[],
  browsers: BrowserType[],
};
export type WebsiteInfoType = {
    website:WebsiteType,
    analytics: AnalyticsType,
};

export const IMAGE_URL_FOR_DOMAINS = `https://icons.duckduckgo.com/ip3/<domain>.com.ico`