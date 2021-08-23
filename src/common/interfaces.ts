export interface DataErrorInterface {
  error?: string;
}

export interface SingleTrainSchedule {
  act_tm: string;
  est_tm: string;
  sched_tm: string;
  station: string;
}

export interface TrainInterface {
  SOURCE: string;
  TRACK: string;
  TRACK_CHANGE?: string;
  consist: string;
  currentstop: string;
  dest: string;
  heading: number;
  lat: string;
  late: number;
  line: string;
  lon: string;
  nextstop: string;
  service: string;
  trainno: string;
}

export interface TrainPageInterface {
  data: [SingleTrainSchedule] | null;
  error?: string;
}
