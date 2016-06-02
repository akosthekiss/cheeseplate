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

  (123.56).toExponential();
  (123.56).toExponential(0);
  (123.56).toExponential(1);
  (123.56).toExponential(5);
  (-1.23).toExponential(1);
  (0.00023).toExponential(0);
  (0.356).toExponential(1);
  (0.0000356).toExponential(2);
  (0.000030056).toExponential(2);
  Infinity.toExponential(0);
  (-Infinity).toExponential(0);
  NaN.toExponential(0);
  (0.0).toExponential(0);
  (0.0).toExponential(1);
  (-0.0).toExponential(0);
  (-0.0).toExponential(1);
  (123456789012345678901.0).toExponential(20);
  (123456789012345678901.0).toExponential("6");
  (123.45).toExponential(3.2);
  (123.45).toExponential(-0.1);

  try {
    (12).toExponential(Number.MAX_VALUE);
  } catch (e) {
  }

  try {
    (12).toExponential(Infinity);
  } catch (e) {
  }

  try {
    (12).toExponential(-1);
  } catch (e) {
  }

  try {
    (12).toExponential(21);
  } catch (e) {
  }

  try {
    Number.prototype.toExponential.call(new Object());
  } catch (e) {
  }

}
