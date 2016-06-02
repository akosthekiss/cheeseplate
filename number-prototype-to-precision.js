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

  (123.56).toPrecision();
  (123.56).toPrecision(1);
  (123.56).toPrecision(2);
  (123.56).toPrecision(6);
  (-1.23).toPrecision(1);
  (0.00023).toPrecision(1);
  (0.356).toPrecision(2);
  (0.0000356).toPrecision(5);
  (0.000030056).toPrecision(4);
  Infinity.toPrecision(1);
  (-Infinity).toPrecision(1);
  NaN.toPrecision(1);
  (0.0).toPrecision(1);
  (-0.0).toPrecision(1);
  (0.0).toPrecision(6);
  (123456789012345678901.0).toPrecision(20);
  (123456789012345678901.0).toPrecision(21);
  (123456789012345678901.0).toPrecision("6");

  (123.56).toPrecision(1.3);
  (123.56).toPrecision(21.9);

  try {
    (12).toPrecision(0);
  } catch (e) {
  }

  try {
    (12).toPrecision(22);
  } catch (e) {
  }

  try {
    Number.prototype.toExponential.call(new Object());
  } catch (e) {
  }

}
