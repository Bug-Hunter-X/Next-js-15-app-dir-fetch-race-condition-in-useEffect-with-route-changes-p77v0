# Next.js 15 app dir fetch race condition

This repository demonstrates a race condition that can occur in Next.js 15's `app` directory when using `fetch` within a `useEffect` hook that's triggered by route parameter changes. Rapid navigation can lead to multiple requests piling up.

## Problem

The `useEffect` hook doesn't automatically clean up previous fetches.  If a route parameter changes frequently, multiple requests are made, causing potential data inconsistencies and performance issues.  

## Solution

Implement request cancellation using `AbortController` to ensure that only the most recent fetch request completes.

## Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Rapidly navigate between different routes to observe the race condition.