// Copyright 2015-2016 Samsung Electronics Co., Ltd.
// Copyright 2015-2016 University of Szeged.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

for (var i = 0; i < 1000; i++)
{

  (NaN).toString();
  (-Infinity).toString();
  (Infinity).toString();
  (NaN).toString(6);
  (-Infinity).toString(7);
  (Infinity).toString(8);
  (16).toString(16);
  (15).toString(16);
  (12.5).toString(4);
  (0.005).toString(4);
  (2000).toString(4);
  (2000).toString(3);
  (2000).toString(16);
  (0.03125).toString(2);
  (0.03125).toString(16);
  (0.0001).toString(4);
  (0).toString(16);
  (-16).toString(16);
  (-15).toString(16);
  (-12.5).toString(4);
  (-0.005).toString(4);
  (-2000).toString(4);
  (-2000).toString(3);
  (-2000).toString(16);
  (-0.03125).toString(2);
  (-0.03125).toString(16);
  (-0.0001).toString(4);
  (-0).toString(16);
  (1e+73).toString(35);
  (-1e+73).toString(35);
  (1).toString(undefined);

  (123400).toString(2);
  (123400).toString(3);
  (123400).toString(4);
  (123400).toString(5);
  (123400).toString(6);
  (123400).toString(7);
  (123400).toString(8);
  (123400).toString(9);
  (123400).toString(10);
  (123400).toString(11);
  (123400).toString(12);
  (123400).toString(13);
  (123400).toString(14);
  (123400).toString(15);
  (123400).toString(16);
  (123400).toString(17);
  (123400).toString(18);
  (123400).toString(19);
  (123400).toString(20);
  (123400).toString(21);
  (123400).toString(22);
  (123400).toString(23);
  (123400).toString(24);
  (123400).toString(25);
  (123400).toString(26);
  (123400).toString(27);
  (123400).toString(28);
  (123400).toString(29);
  (123400).toString(30);
  (123400).toString(31);
  (123400).toString(32);
  (123400).toString(33);
  (123400).toString(34);
  (123400).toString(35);
  (123400).toString(36);

  (123400).toString(new Number(16));

  for (radix = 2; radix <= 36; radix++) {
    for (num = 1; num < 100; num++) {
      (num).toString(radix);
    }
  }

  try {
    (123).toString(1);
  } catch (e) {
  }

  try {
    (123).toString(37);
  } catch (e) {
  }

  try {
    (123).toString(Infinity);
  } catch (e) {
  }

}
