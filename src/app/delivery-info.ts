interface Info {
    context: string,
    ftime: number,
    id: number,
    time: number,
}

export interface DeliveryInfo {
    internationalTrackingInfo: Array<Info>,
    clearanceTrackingInfo: Array<Info>,
    domesticTrackingInfo: Array<Info>,
    domesticTrackingNumber: string,
}
