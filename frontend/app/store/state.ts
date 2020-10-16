import {Node} from 'org_xprof/frontend/app/common/interfaces/op_profile.proto';
import {DataRequestType} from 'org_xprof/frontend/app/common/constants/enums';
import {AllReduceOpInfo, ChannelInfo, PodStatsRecord} from 'org_xprof/frontend/app/common/interfaces/data_table';
import {HeapObject} from 'org_xprof/frontend/app/common/interfaces/heap_object';

/** Type for active heap object state */
type ActiveHeapObjectState = HeapObject|null;

/** State of memory viewer */
export interface MemoryViewerState {
  activeHeapObject: ActiveHeapObjectState;
}

/** Type for active op profile node state */
type ActiveOpProfileNodeState = Node|null;

/** State of op profile */
export interface OpProfileState {
  activeOpProfileNode: ActiveOpProfileNodeState;
}

/** Type for active pod viewer info state */
type ActivePodViewerInfoState = AllReduceOpInfo|ChannelInfo|PodStatsRecord|null;

/** State of pod viewer */
export interface PodViewerState {
  activePodViewerInfo: ActivePodViewerInfoState;
}

/** Type for capturing profile state */
type CapturingProfileState = boolean;

/** State of loading */
export interface LoadingState {
  loading: boolean;
  message: string;
}

/** Type for current tool state */
type CurrentToolState = string;

/** The interface of params of DataRequest */
interface DataRequestParams {
  run?: string;
  tag?: string;
  host?: string;
  tool?: string;
  sessionId?: string;
}

/** Type for export_as_csv state */
type ExportAsCsvState = string;

/** State of data request */
export interface DataRequest {
  type: DataRequestType;
  params: DataRequestParams;
  loadingMessage?: string;
}

/** Type for error message state */
type ErrorMessageState = string;

/** State object */
export interface AppState {
  memoryViewerState: MemoryViewerState;
  opProfileState: OpProfileState;
  podViewerState: PodViewerState;
  capturingProfile: CapturingProfileState;
  loadingState: LoadingState;
  currentTool: CurrentToolState;
  dataRequest: DataRequest;
  exportAsCsv: ExportAsCsvState;
  errorMessage: ErrorMessageState;
}

/** Initial state of active heap object */
const INIT_ACTIVE_HEAP_OBJECT_STATE: ActiveHeapObjectState = null;

/** Initial state object */
export const INIT_MEMORY_VIEWER_STATE: MemoryViewerState = {
  activeHeapObject: INIT_ACTIVE_HEAP_OBJECT_STATE,
};

/** Initial state of active op profile node */
const INIT_ACTIVE_OP_PROFILE_NODE_STATE: ActiveOpProfileNodeState = null;

/** Initial state of op profile */
export const INIT_OP_PROFILE_STATE: OpProfileState = {
  activeOpProfileNode: INIT_ACTIVE_OP_PROFILE_NODE_STATE,
};

/** Initial state of active pod viewer info */
const INIT_ACTIVE_POD_VIEWER_INFO_STATE: ActivePodViewerInfoState = null;

/** Initial state of pod viewer */
export const INIT_POD_VIEWER_STATE: PodViewerState = {
  activePodViewerInfo: INIT_ACTIVE_POD_VIEWER_INFO_STATE,
};

/** Initial state of capturing profile */
const INIT_CAPTURING_PROFILE_STATE: CapturingProfileState = false;

/** Initial state of loading */
export const INIT_LOADING_STATE: LoadingState = {
  loading: false,
  message: '',
};

/** Initial state of current tool */
const INIT_CURRENT_TOOL_STATE: CurrentToolState = '';

/** Initial state of request data */
const INIT_REQUEST_DATA_STATE: DataRequest = {
  type: DataRequestType.UNKNOWN,
  params: {},
};

/** Initial state of export_as_csv */
const INIT_EXPORT_AS_CSV_STATE: ExportAsCsvState = '';

/** Initial state of error message */
const INIT_ERROR_MESSAGE_STATE: ErrorMessageState = '';

/** Initial state object */
export const INIT_APP_STATE: AppState = {
  memoryViewerState: INIT_MEMORY_VIEWER_STATE,
  opProfileState: INIT_OP_PROFILE_STATE,
  podViewerState: INIT_POD_VIEWER_STATE,
  capturingProfile: INIT_CAPTURING_PROFILE_STATE,
  loadingState: INIT_LOADING_STATE,
  currentTool: INIT_CURRENT_TOOL_STATE,
  dataRequest: INIT_REQUEST_DATA_STATE,
  exportAsCsv: INIT_EXPORT_AS_CSV_STATE,
  errorMessage: INIT_ERROR_MESSAGE_STATE,
};

/** Feature key for store */
export const STORE_KEY = 'root';
