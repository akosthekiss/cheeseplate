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

for (var i = 0; i < 200000; i++)
{

  (123.56).toFixed();
  (123.56).toFixed(0);
  (123.56).toFixed(1);
  (123.56).toFixed(5);
  (1.23e-10).toFixed(2);
  (1.23e+20).toFixed(2);
  (1.23e+21).toFixed(2);
  (-1.23).toFixed(1);
  (0.00023).toFixed(0);
  (0.356).toFixed(2);
  (0.0000356).toFixed(5);
  (0.000030056).toFixed(7);
  Infinity.toFixed(0);
  (-Infinity).toFixed(0);
  NaN.toFixed(0);
  (0.0).toFixed(0);
  (0.0).toFixed(1);
  (-0.0).toFixed(0);
  (-0.0).toFixed(1);
  (123456789012345678901.0).toFixed(20);
  (123.56).toFixed(NaN);
  (123.56).toFixed(-0.9);

  try {
    Number.prototype.toExponential.call(new Object());
  } catch (e) {
  }

  try {
    (12).toFixed(-1);
  } catch (e) {
  }

  try {
    (12).toFixed(21);
  } catch (e) {
  }

}
