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
export type AnalyticsType = {
  avgActiveTime: number,
  totalActiveTime:number,
  totalSessions: number,
  totalVisitors: number,
  hourlyVisitors: HourlyVisitorsType[],
  dailyVisitors: DailyVisitorsType[],
};
export type WebsiteInfoType = {
    website:WebsiteType,
    analytics: AnalyticsType,
};