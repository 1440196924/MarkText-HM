/*
Copyright (c) GitHub, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// These paths are all drawn to a 10x10 view box and replicate the symbols
// seen on Windows 10 window controls.
export const closePath =
  'M 0,0 0,0.7 4.3,5 0,9.3 0,10 0.7,10 5,5.7 9.3,10 10,10 10,9.3 5.7,5 10,0.7 10,0 9.3,0 5,4.3 0.7,0 Z'
export const restorePath =
  'm 2,1e-5 0,2 -2,0 0,8 8,0 0,-2 2,0 0,-8 z m 1,1 6,0 0,6 -1,0 0,-5 -5,0 z m -2,2 6,0 0,6 -6,0 z'
export const maximizePath = 'M 0,0 0,10 10,10 10,0 Z M 1,1 9,1 9,9 1,9 Z'
export const minimizePath = 'M 0,5 10,5 10,6 0,6 Z'

// HarmonyOS window control symbols (1024x1024 view box). Mirrored horizontally
// where the HarmonyOS design mirrors the glyphs. Fill follows currentColor.
export const harmonyMaximizePath =
  'M554.666667 149.333333a42.666667 42.666667 0 0 1 42.666666-42.666666h256.085334A63.914667 63.914667 0 0 1 917.333333 170.666667v256a42.666667 42.666667 0 1 1-85.333333 0V192H597.333333a42.666667 42.666667 0 0 1-42.666666-42.666667zM106.666667 853.333333V597.333333a42.666667 42.666667 0 1 1 85.333333 0v234.666667h234.666667a42.666667 42.666667 0 1 1 0 85.333333H170.581333A63.936 63.936 0 0 1 106.666667 853.333333z'
export const harmonyRestorePath =
  'M554.666667 405.333333V128a42.666667 42.666667 0 1 1 85.333333 0v256h256a42.666667 42.666667 0 1 1 0 85.333333H618.581333A63.914667 63.914667 0 0 1 554.666667 405.333333zM85.333333 597.333333a42.666667 42.666667 0 0 1 42.666667-42.666666h277.418667A63.914667 63.914667 0 0 1 469.333333 618.666667v277.333333a42.666667 42.666667 0 1 1-85.333333 0V640H128a42.666667 42.666667 0 0 1-42.666667-42.666667z'
export const harmonyMinimizePath =
  'M917.333333 512a42.666667 42.666667 0 0 1-42.666666 42.666667H149.333333a42.666667 42.666667 0 1 1 0-85.333334h725.333334a42.666667 42.666667 0 0 1 42.666666 42.666667z'
export const harmonyClosePath =
  'M451.669333 512L210.304 270.656a42.666667 42.666667 0 0 1 60.330667-60.352L512 451.669333 753.365333 210.304a42.666667 42.666667 0 1 1 60.330667 60.352L572.330667 512l241.365333 241.365333a42.666667 42.666667 0 1 1-60.330667 60.330667L512 572.373333 270.634667 813.696a42.666667 42.666667 0 1 1-60.330667-60.330667L451.669333 512z'
