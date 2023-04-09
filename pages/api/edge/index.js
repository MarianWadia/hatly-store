import { NextResponse } from 'next/server';

export const config = {
  runtime: 'edge', // do this is a pre-requisite
  // regions: ['iad1'], // only execute this function on iad1
};

export default function handler(req, res) {
  return NextResponse.json({
    name: `Hello, from ${req.url} I'm now an Edge Function!`,
  });
}
