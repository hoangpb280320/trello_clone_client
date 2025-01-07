import axios, {
  AxiosProgressEvent,
  AxiosRequestConfig,
  RawAxiosRequestHeaders,
} from "axios";

export default class HttpClient {
  defaultHeaders: RawAxiosRequestHeaders;

  constructor() {
    this.defaultHeaders = {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    };
  }

  buildUrl(path: string): string {
    const baseUrl = import.meta.env.VITE_BASE_API_URL;
    return `${baseUrl}${path}`;
  }

  buildHeaders(headers?: RawAxiosRequestHeaders): RawAxiosRequestHeaders {
    return { ...this.defaultHeaders, ...headers };
  }

  get<R>(signal?: AbortSignal) {
    return (
      relativeUrl: string,
      headers?: RawAxiosRequestHeaders,
      config: Partial<AxiosRequestConfig> = {}
    ) =>
      this.makeRequest<R>({
        relativeUrl,
        headers,
        method: "get",
        config,
        signal,
      });
  }

  post<R>(signal?: AbortSignal) {
    return (
      relativeUrl: string,
      body?: any,
      headers?: RawAxiosRequestHeaders
    ) =>
      this.makeRequest<R>({
        relativeUrl,
        headers,
        body,
        method: "post",
        signal,
      });
  }

  patch<R>(signal?: AbortSignal) {
    return (relativeUrl: string, body: any, headers?: RawAxiosRequestHeaders) =>
      this.makeRequest<R>({
        relativeUrl,
        body,
        headers,
        method: "patch",
        signal,
      });
  }

  put<R>(signal?: AbortSignal) {
    return (
      relativeUrl: string,
      body: any,
      headers?: RawAxiosRequestHeaders,
      onUploadProgress: (progress: AxiosProgressEvent) => void = () => undefined
    ) =>
      this.makeRequest<R>({
        relativeUrl,
        body,
        headers,
        method: "put",
        onUploadProgress,
        signal,
      });
  }

  delete<R = never>(signal?: AbortSignal) {
    return (
      relativeUrl: string,
      body?: any,
      headers?: RawAxiosRequestHeaders
    ) =>
      this.makeRequest<R>({
        relativeUrl,
        body,
        headers,
        method: "delete",
        signal,
      });
  }

  makeRequest<R>({
    relativeUrl,
    body,
    headers,
    method,
    config,
    onUploadProgress,
    signal,
  }: {
    relativeUrl: string;
    body?: any;
    headers?: RawAxiosRequestHeaders;
    method: string;
    config?: Partial<AxiosRequestConfig>;
    onUploadProgress?: (progress: AxiosProgressEvent) => void;
    signal?: AbortSignal;
  }) {
    return axios.request<R>({
      url: this.buildUrl(relativeUrl),
      headers: this.buildHeaders(headers),
      data: body,
      withCredentials: false,
      method,
      onUploadProgress,
      maxRedirects: 0,
      signal,
      ...config,
    });
  }
}
