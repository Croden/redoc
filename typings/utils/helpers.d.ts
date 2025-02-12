/**
 * Maps over array passing `isLast` bool to iterator as the second argument
 */
export declare function mapWithLast<T, P>(array: T[], iteratee: (item: T, isLast: boolean) => P): P[];
/**
 * Creates an object with the same keys as object and values generated by running each
 * own enumerable string keyed property of object thru iteratee.
 * The iteratee is invoked with three arguments: (value, key, object).
 *
 * @param object the object to iterate over
 * @param iteratee the function invoked per iteration.
 */
export declare function mapValues<T, P>(object: Dict<T>, iteratee: (val: T, key: string, obj: Dict<T>) => P): Dict<P>;
/**
 * flattens collection using `prop` field as a children
 * @param collectionItems collection items
 * @param prop item property with child elements
 */
export declare function flattenByProp<T extends object, P extends keyof T>(collectionItems: T[], prop: P): T[];
export declare function stripTrailingSlash(path: string): string;
export declare function isNumeric(n: any): n is number;
export declare function appendToMdHeading(md: string, heading: string, content: string): string;
export declare const mergeObjects: (target: any, ...sources: any[]) => any;
/**
 * slugify() returns empty string when failed to slugify.
 * so try to return minimum slugified-string with failed one which keeps original value
 * the regex codes are referenced with https://gist.github.com/mathewbyrne/1280286
 */
export declare function safeSlugify(value: string): string;
export declare function isAbsoluteUrl(url: string): boolean;
/**
 * simple resolve URL which doesn't break on strings with url fragments
 * e.g. resolveUrl('http://test.com:{port}', 'path') results in http://test.com:{port}/path
 */
export declare function resolveUrl(url: string, to: string): string;
export declare function getBasePath(serverUrl: string): string;
export declare function titleize(text: string): string;
export declare function removeQueryString(serverUrl: string): string;
export declare function unescapeHTMLChars(str: string): string;
