function _M0DTPB4Json4Null() {}
_M0DTPB4Json4Null.prototype.$tag = 0;
const _M0DTPB4Json4Null__ = new _M0DTPB4Json4Null();
function _M0DTPB4Json4True() {}
_M0DTPB4Json4True.prototype.$tag = 1;
const _M0DTPB4Json4True__ = new _M0DTPB4Json4True();
function _M0DTPB4Json5False() {}
_M0DTPB4Json5False.prototype.$tag = 2;
const _M0DTPB4Json5False__ = new _M0DTPB4Json5False();
function _M0DTPB4Json6Number(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPB4Json6Number.prototype.$tag = 3;
function _M0DTPB4Json6String(param0) {
  this._0 = param0;
}
_M0DTPB4Json6String.prototype.$tag = 4;
function _M0DTPB4Json5Array(param0) {
  this._0 = param0;
}
_M0DTPB4Json5Array.prototype.$tag = 5;
function _M0DTPB4Json6Object(param0) {
  this._0 = param0;
}
_M0DTPB4Json6Object.prototype.$tag = 6;
const $reinterpret_view = new DataView(new ArrayBuffer(8));
function $i64_reinterpret_f64(a) {
  $reinterpret_view.setBigUint64(0, BigInt.asUintN(64, a), false);
  return $reinterpret_view.getFloat64(0, false);
}
function _M0TPC28internal7strconv9FloatInfo(param0, param1, param2) {
  this.mantissa_bits = param0;
  this.exponent_bits = param1;
  this.bias = param2;
}
function _M0TP38BeiLaDuo12cidr_2daudit5nginx6Limits(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9) {
  this.max_sources = param0;
  this.max_total_chars = param1;
  this.max_source_chars = param2;
  this.max_include_depth = param3;
  this.max_include_expansions = param4;
  this.max_context_depth = param5;
  this.max_directives = param6;
  this.max_contexts = param7;
  this.max_rules = param8;
  this.max_audit_pairs = param9;
}
function _M0DTPC16result6ResultGRP28BeiLaDuo12cidr_2daudit9CidrBlocksE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP28BeiLaDuo12cidr_2daudit9CidrBlocksE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP28BeiLaDuo12cidr_2daudit9CidrBlocksE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP28BeiLaDuo12cidr_2daudit9CidrBlocksE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGisE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGisE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGisE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGisE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP28BeiLaDuo12cidr_2daudit4IPv4sE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP28BeiLaDuo12cidr_2daudit4IPv4sE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP28BeiLaDuo12cidr_2daudit4IPv4sE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP28BeiLaDuo12cidr_2daudit4IPv4sE2Ok.prototype.$tag = 1;
function _M0DTP210LuoYunxin19moonnginx8NgxError6Syntax(param0) {
  this._0 = param0;
}
_M0DTP210LuoYunxin19moonnginx8NgxError6Syntax.prototype.$tag = 0;
function _M0DTP210LuoYunxin19moonnginx8NgxError10Unexpected(param0) {
  this._0 = param0;
}
_M0DTP210LuoYunxin19moonnginx8NgxError10Unexpected.prototype.$tag = 1;
function _M0DTP210LuoYunxin19moonnginx8NgxError12Unterminated(param0) {
  this._0 = param0;
}
_M0DTP210LuoYunxin19moonnginx8NgxError12Unterminated.prototype.$tag = 2;
function _M0DTP210LuoYunxin19moonnginx8NgxError10Constraint(param0) {
  this._0 = param0;
}
_M0DTP210LuoYunxin19moonnginx8NgxError10Constraint.prototype.$tag = 3;
function _M0DTP210LuoYunxin19moonnginx8NgxError14NotImplemented(param0) {
  this._0 = param0;
}
_M0DTP210LuoYunxin19moonnginx8NgxError14NotImplemented.prototype.$tag = 4;
function _M0DTPC16result6ResultGRP210LuoYunxin19moonnginx9DirectiveRP210LuoYunxin19moonnginx8NgxErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP210LuoYunxin19moonnginx9DirectiveRP210LuoYunxin19moonnginx8NgxErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP210LuoYunxin19moonnginx9DirectiveRP210LuoYunxin19moonnginx8NgxErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP210LuoYunxin19moonnginx9DirectiveRP210LuoYunxin19moonnginx8NgxErrorE2Ok.prototype.$tag = 1;
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
const _M0FPB12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
function _M0TPB4IterGRPC16string10StringViewE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGcE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB9ArrayViewGkE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
function $oob() {
  throw new Error("Index out of bounds");
}
function $makebytes(a, b) {
  const arr = new Uint8Array(a);
  if (b !== 0) {
    arr.fill(b);
  }
  return arr;
}
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB4IterGsE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB8MutLocalGORPC16string10StringViewE(param0) {
  this.val = param0;
}
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
function _M0TPB3MapGsRPB5ArrayGsEE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGsRPB4JsonE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGsRPB5ArrayGsEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRPB4JsonE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0DTPC16option6OptionGRPB5ArrayGsEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGsEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGsEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGsEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGsEE4Some.prototype.$tag = 1;
function _M0TPB8MutLocalGORPB5EntryGsRPB4JsonEE(param0) {
  this.val = param0;
}
const _M0MPB7JSArray4copy = (arr) => arr.slice(0);
function _M0TPB9ArrayViewGcE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const _M0MPB7JSArray3pop = (arr) => arr.pop();
function _M0TPB12MutArrayViewGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB12MutArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGuRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar.prototype.$tag = 5;
function _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof() {}
_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof.prototype.$tag = 4;
const _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__ = new _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof();
function _M0DTPC15error5Error54moonbitlang_2fcore_2fjson_2eParseError_2eInvalidNumber(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error54moonbitlang_2fcore_2fjson_2eParseError_2eInvalidNumber.prototype.$tag = 3;
function _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eInvalidIdentEscape(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eInvalidIdentEscape.prototype.$tag = 2;
function _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded() {}
_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded.prototype.$tag = 1;
const _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__ = new _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded();
function _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0TPC28internal7strconv6Number(param0, param1, param2, param3) {
  this.exponent = param0;
  this.mantissa = param1;
  this.negative = param2;
  this.many_digits = param3;
}
function _M0DTPC16result6ResultGdRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPC15error5ErrorE2Ok.prototype.$tag = 1;
function $i64_clz(a) {
  a = BigInt.asUintN(64, a);
  if (a === 0n) return 64;
  const hi = Number(a >> 32n);
  if (hi !== 0) {
    return Math.clz32(hi);
  }
  return 32 + Math.clz32(Number(a & 0xffffffffn));
}
function _M0TPC28internal7strconv12EiselProduct(param0, param1) {
  this.lo = param0;
  this.hi = param1;
}
function _M0TPC28internal7strconv7Decimal(param0, param1, param2, param3, param4, param5) {
  this.digits = param0;
  this.digits_num = param1;
  this.decimal_point = param2;
  this.negative = param3;
  this.truncated = param4;
  this.overflowed = param5;
}
function _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok.prototype.$tag = 1;
function $f64_convert_i64_u(a) {
  return Number(a);
}
function _M0DTPC16option6OptionGdE4None() {}
_M0DTPC16option6OptionGdE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGdE4None__ = new _M0DTPC16option6OptionGdE4None();
function _M0DTPC16option6OptionGdE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGdE4Some.prototype.$tag = 1;
function _M0TPC14json8Position(param0, param1) {
  this.line = param0;
  this.column = param1;
}
function _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPC14json12ParseContext(param0, param1, param2) {
  this.offset = param0;
  this.input = param1;
  this.end_offset = param2;
}
function $f64_convert_i64(a) {
  return Number(BigInt.asIntN(64, a));
}
function _M0TPC14json11LexedNumber(param0, param1) {
  this.repr = param0;
  this.value = param1;
}
function _M0TPC14json14JsonNumberScan(param0, param1, param2, param3, param4) {
  this.negative = param0;
  this.is_integer = param1;
  this.mantissa = param2;
  this.exponent = param3;
  this.many_digits = param4;
}
function _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC14json5Token4Null() {}
_M0DTPC14json5Token4Null.prototype.$tag = 0;
const _M0DTPC14json5Token4Null__ = new _M0DTPC14json5Token4Null();
function _M0DTPC14json5Token4True() {}
_M0DTPC14json5Token4True.prototype.$tag = 1;
const _M0DTPC14json5Token4True__ = new _M0DTPC14json5Token4True();
function _M0DTPC14json5Token5False() {}
_M0DTPC14json5Token5False.prototype.$tag = 2;
const _M0DTPC14json5Token5False__ = new _M0DTPC14json5Token5False();
function _M0DTPC14json5Token6Number(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json5Token6Number.prototype.$tag = 3;
function _M0DTPC14json5Token6String(param0) {
  this._0 = param0;
}
_M0DTPC14json5Token6String.prototype.$tag = 4;
function _M0DTPC14json5Token6LBrace() {}
_M0DTPC14json5Token6LBrace.prototype.$tag = 5;
const _M0DTPC14json5Token6LBrace__ = new _M0DTPC14json5Token6LBrace();
function _M0DTPC14json5Token6RBrace() {}
_M0DTPC14json5Token6RBrace.prototype.$tag = 6;
const _M0DTPC14json5Token6RBrace__ = new _M0DTPC14json5Token6RBrace();
function _M0DTPC14json5Token8LBracket() {}
_M0DTPC14json5Token8LBracket.prototype.$tag = 7;
const _M0DTPC14json5Token8LBracket__ = new _M0DTPC14json5Token8LBracket();
function _M0DTPC14json5Token8RBracket() {}
_M0DTPC14json5Token8RBracket.prototype.$tag = 8;
const _M0DTPC14json5Token8RBracket__ = new _M0DTPC14json5Token8RBracket();
function _M0DTPC14json5Token5Comma() {}
_M0DTPC14json5Token5Comma.prototype.$tag = 9;
const _M0DTPC14json5Token5Comma__ = new _M0DTPC14json5Token5Comma();
function _M0TPB9ArrayViewGUsRPB4JsonEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC14json10WriteFrame5Array(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json10WriteFrame5Array.prototype.$tag = 0;
function _M0DTPC14json10WriteFrame6Object(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json10WriteFrame6Object.prototype.$tag = 1;
function _M0TP28BeiLaDuo12cidr_2daudit4Rule(param0, param1, param2, param3, param4) {
  this.id = param0;
  this.action = param1;
  this.block = param2;
  this.source_block = param3;
  this.note = param4;
}
function _M0TP28BeiLaDuo12cidr_2daudit4IPv4(param0) {
  this.value = param0;
}
function _M0TP28BeiLaDuo12cidr_2daudit9CidrBlock(param0, param1) {
  this.network = param0;
  this.prefix = param1;
}
function _M0DTPC16result6ResultGURP28BeiLaDuo12cidr_2daudit4IPv4iEsE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGURP28BeiLaDuo12cidr_2daudit4IPv4iEsE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGURP28BeiLaDuo12cidr_2daudit4IPv4iEsE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGURP28BeiLaDuo12cidr_2daudit4IPv4iEsE2Ok.prototype.$tag = 1;
function _M0TP210LuoYunxin19moonnginx6Config(param0, param1, param2) {
  this.file = param0;
  this.parsed = param1;
  this.status = param2;
}
function _M0TP210LuoYunxin19moonnginx6Cursor(param0, param1, param2) {
  this.src = param0;
  this.i = param1;
  this.line = param2;
}
function _M0DTPC16result6ResultGsRP210LuoYunxin19moonnginx8NgxErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP210LuoYunxin19moonnginx8NgxErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRP210LuoYunxin19moonnginx8NgxErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP210LuoYunxin19moonnginx8NgxErrorE2Ok.prototype.$tag = 1;
function _M0TP210LuoYunxin19moonnginx3Tok(param0, param1, param2) {
  this.kind = param0;
  this.value = param1;
  this.line = param2;
}
function _M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx3TokERP210LuoYunxin19moonnginx8NgxErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx3TokERP210LuoYunxin19moonnginx8NgxErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx3TokERP210LuoYunxin19moonnginx8NgxErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx3TokERP210LuoYunxin19moonnginx8NgxErrorE2Ok.prototype.$tag = 1;
function _M0TP210LuoYunxin19moonnginx9Directive(param0, param1, param2, param3, param4, param5, param6) {
  this.name = param0;
  this.line = param1;
  this.args = param2;
  this.quoted = param3;
  this.children = param4;
  this.has_block = param5;
  this.comment = param6;
}
function _M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx9DirectiveERP210LuoYunxin19moonnginx8NgxErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx9DirectiveERP210LuoYunxin19moonnginx8NgxErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx9DirectiveERP210LuoYunxin19moonnginx8NgxErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx9DirectiveERP210LuoYunxin19moonnginx8NgxErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP210LuoYunxin19moonnginx6ConfigRP210LuoYunxin19moonnginx8NgxErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP210LuoYunxin19moonnginx6ConfigRP210LuoYunxin19moonnginx8NgxErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP210LuoYunxin19moonnginx6ConfigRP210LuoYunxin19moonnginx8NgxErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP210LuoYunxin19moonnginx6ConfigRP210LuoYunxin19moonnginx8NgxErrorE2Ok.prototype.$tag = 1;
function _M0TP210LuoYunxin19moonnginx6Parser(param0, param1, param2) {
  this.toks = param0;
  this.i = param1;
  this.file = param2;
}
function _M0TP38BeiLaDuo12cidr_2daudit5nginx11ConfigError(param0, param1, param2, param3) {
  this.code = param0;
  this.message = param1;
  this.path = param2;
  this.line = param3;
}
function _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGsRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx10SourceFileERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx10SourceFileERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx10SourceFileERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx10SourceFileERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok.prototype.$tag = 1;
function _M0TP38BeiLaDuo12cidr_2daudit5nginx10SourceFile(param0, param1) {
  this.path = param0;
  this.content = param1;
}
function _M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx9DirectiveERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx9DirectiveERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx9DirectiveERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx9DirectiveERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok.prototype.$tag = 1;
function _M0TP38BeiLaDuo12cidr_2daudit5nginx12ParsedSource(param0, param1) {
  this.path = param0;
  this.nodes = param1;
}
function _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx12ExpandedNodeERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx12ExpandedNodeERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx12ExpandedNodeERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx12ExpandedNodeERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok.prototype.$tag = 1;
function _M0TP38BeiLaDuo12cidr_2daudit5nginx14SourceLocation(param0, param1, param2) {
  this.path = param0;
  this.line = param1;
  this.include_chain = param2;
}
function _M0TP38BeiLaDuo12cidr_2daudit5nginx11IncludeEdge(param0, param1, param2) {
  this.source = param0;
  this.pattern = param1;
  this.targets = param2;
}
function _M0TP38BeiLaDuo12cidr_2daudit5nginx10Diagnostic(param0, param1, param2, param3, param4, param5) {
  this.code = param0;
  this.severity = param1;
  this.blocking = param2;
  this.message = param3;
  this.source = param4;
  this.context = param5;
}
function _M0TP38BeiLaDuo12cidr_2daudit5nginx12ExpandedNode(param0, param1, param2) {
  this.directive = param0;
  this.source = param1;
  this.children = param2;
}
function _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx13AccessContextRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx13AccessContextRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx13AccessContextRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx13AccessContextRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx11ProbeResultRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx11ProbeResultRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx11ProbeResultRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx11ProbeResultRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok.prototype.$tag = 1;
function _M0TP38BeiLaDuo12cidr_2daudit5nginx11ProbeResult(param0, param1, param2, param3) {
  this.ip = param0;
  this.outcome = param1;
  this.context = param2;
  this.matched_rule = param3;
}
function _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx10AccessRuleRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx10AccessRuleRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx10AccessRuleRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx10AccessRuleRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok.prototype.$tag = 1;
function _M0TP38BeiLaDuo12cidr_2daudit5nginx10AccessRule(param0, param1, param2, param3) {
  this.rule = param0;
  this.source = param1;
  this.owner_context = param2;
  this.raw_operand = param3;
}
function _M0TP38BeiLaDuo12cidr_2daudit5nginx13AccessContext(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9) {
  this.selector = param0;
  this.kind = param1;
  this.label = param2;
  this.source = param3;
  this.parent = param4;
  this.inherited_from = param5;
  this.declared_rules = param6;
  this.rules = param7;
  this.diagnostics = param8;
  this.audit_pair_budget = param9;
}
function _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx8AnalysisRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx8AnalysisRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx8AnalysisRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx8AnalysisRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok.prototype.$tag = 1;
function _M0TP38BeiLaDuo12cidr_2daudit5nginx11ExpandState(param0, param1, param2, param3, param4, param5, param6, param7, param8) {
  this.entry = param0;
  this.files = param1;
  this.limits = param2;
  this.cache = param3;
  this.used = param4;
  this.edges = param5;
  this.diagnostics = param6;
  this.expansions = param7;
  this.directives = param8;
}
function _M0TP38BeiLaDuo12cidr_2daudit5nginx10BuildState(param0, param1, param2, param3) {
  this.limits = param0;
  this.contexts = param1;
  this.diagnostics = param2;
  this.rule_count = param3;
}
function _M0TP38BeiLaDuo12cidr_2daudit5nginx8Analysis(param0, param1, param2, param3, param4, param5, param6) {
  this.entry = param0;
  this.scope = param1;
  this.sources = param2;
  this.include_edges = param3;
  this.contexts = param4;
  this.diagnostics = param5;
  this.audit_pair_budget = param6;
}
function _M0TP38BeiLaDuo12cidr_2daudit5nginx12AuditFinding(param0, param1, param2, param3, param4, param5, param6) {
  this.code = param0;
  this.severity = param1;
  this.message = param2;
  this.rule_id = param3;
  this.related_rule_ids = param4;
  this.source = param5;
  this.context = param6;
}
function _M0DTPC16result6ResultGURP38BeiLaDuo12cidr_2daudit5nginx12ContextAuditiERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGURP38BeiLaDuo12cidr_2daudit5nginx12ContextAuditiERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGURP38BeiLaDuo12cidr_2daudit5nginx12ContextAuditiERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGURP38BeiLaDuo12cidr_2daudit5nginx12ContextAuditiERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok.prototype.$tag = 1;
function _M0TP38BeiLaDuo12cidr_2daudit5nginx10OwnedRange(param0, param1, param2) {
  this.begin = param0;
  this.end = param1;
  this.action = param2;
}
function $compare_uint(a, b) {
  const c = a >>> 0;
  const d = b >>> 0;
  return (c >= d) - (c <= d);
}
function _M0TP38BeiLaDuo12cidr_2daudit5nginx12ContextAudit(param0, param1, param2) {
  this.context = param0;
  this.findings = param1;
  this.blocking = param2;
}
function _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx12ContextAuditRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx12ContextAuditRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx12ContextAuditRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx12ContextAuditRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx12ContextAuditERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx12ContextAuditERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx12ContextAuditERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx12ContextAuditERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok.prototype.$tag = 1;
function _M0TP38BeiLaDuo12cidr_2daudit3cli9CliResult(param0, param1, param2) {
  this.exit_code = param0;
  this.stdout = param1;
  this.stderr = param2;
}
function _M0TP38BeiLaDuo12cidr_2daudit3cli8CliError(param0, param1) {
  this.code = param0;
  this.message = param1;
}
function _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16option6OptionGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx12ContextAuditEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx12ContextAuditEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx12ContextAuditEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx12ContextAuditEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx12ContextAuditEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx12ContextAuditEE4Some.prototype.$tag = 1;
function _M0TP38BeiLaDuo12cidr_2daudit3cli7Options(param0, param1, param2, param3, param4, param5, param6, param7) {
  this.command = param0;
  this.input_root = param1;
  this.entry = param2;
  this.context_selector = param3;
  this.ip = param4;
  this.format = param5;
  this.strict = param6;
  this.limits = param7;
}
function _M0DTPC16result6ResultGiRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx6LimitsRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx6LimitsRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx6LimitsRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx6LimitsRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit3cli7OptionsRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit3cli7OptionsRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit3cli7OptionsRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit3cli7OptionsRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE2Ok.prototype.$tag = 1;
const _M0FP38BeiLaDuo12cidr_2daudit6fileio19filesystem__request = (root, operation, relative, maximum) => {
   const fs = process.getBuiltinModule('fs');
   const path = process.getBuiltinModule('path');
   const failure = (code, message) => JSON.stringify({ok:false, code, message});
   try {
     const base = fs.realpathSync(path.resolve(root));
     if (!fs.statSync(base).isDirectory()) return failure('io_error', 'Input root is not a directory');
     if (path.isAbsolute(relative)) return failure('path_escape', 'Expected a root-relative path');
     const target = path.resolve(base, relative);
     const inside = path.relative(base, target);
     if (inside === '..' || inside.startsWith('..' + path.sep) || path.isAbsolute(inside)) {
       return failure('path_escape', 'Path leaves the input root');
     }
     let current = base;
     for (const part of inside.split(path.sep).filter(Boolean)) {
       current = path.join(current, part);
       if (fs.lstatSync(current).isSymbolicLink()) {
         return failure('unsupported_path', 'Symbolic links and junctions are not supported');
       }
     }
     if (operation === 'read') {
       if (!fs.statSync(target).isFile()) return failure('io_error', 'Configuration source is not a regular file');
       const fd = fs.openSync(target, 'r');
       try {
         const capacity = maximum * 4 + 3;
         if (fs.fstatSync(fd).size > capacity) return failure('limit_exceeded', 'Encoded file exceeds the source character budget');
         const chunks = [];
         let length = 0;
         for (;;) {
           const buffer = Buffer.alloc(Math.min(16384, capacity - length + 1));
           const count = fs.readSync(fd, buffer, 0, buffer.length, null);
           if (count === 0) break;
           length += count;
           if (length > capacity) return failure('limit_exceeded', 'File grew beyond the source budget');
           chunks.push(buffer.subarray(0, count));
         }
         const content = new TextDecoder('utf-8', {fatal:true}).decode(Buffer.concat(chunks));
         if (content.length > maximum) return failure('limit_exceeded', 'Source exceeds its character budget');
         return JSON.stringify({ok:true, content});
       } finally { fs.closeSync(fd); }
     }
     if (operation === 'list') {
       const directory = fs.opendirSync(target);
       try {
         const names = [];
         for (;;) {
           const item = directory.readSync();
           if (item === null) break;
           if (names.length >= maximum) return failure('limit_exceeded', 'Directory scan exceeds its entry budget');
           names.push(item.name);
         }
         return JSON.stringify({ok:true, names});
       } finally { directory.closeSync(); }
     }
     return failure('internal_io', 'Unknown filesystem operation');
   } catch (error) {
     if (error.code === 'ENOENT') return failure('missing_source', 'Configuration source or directory does not exist');
     if (error instanceof TypeError && error.code === 'ERR_ENCODING_INVALID_ENCODED_DATA') {
       return failure('invalid_utf8', 'Configuration source is not valid UTF-8');
     }
     return failure('io_error', String(error.code || error.name || 'Filesystem error'));
   }
 };
function _M0DTPC16result6ResultGRPB4JsonRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB4JsonRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGsERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGsERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGsERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGsERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok.prototype.$tag = 1;
function _M0TP38BeiLaDuo12cidr_2daudit6fileio9LoadState(param0, param1, param2, param3, param4, param5, param6) {
  this.root = param0;
  this.entry = param1;
  this.limits = param2;
  this.sources = param3;
  this.directories = param4;
  this.remaining_chars = param5;
  this.remaining_entries = param6;
}
function _M0TPB9ArrayViewGUsRPB5ArrayGsEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const _M0FP48BeiLaDuo12cidr_2daudit3cmd11nginx_2dcli9arguments = () => process.argv.slice(2);
const _M0FP48BeiLaDuo12cidr_2daudit3cmd11nginx_2dcli6finish = (code, stdout, stderr) => {
   if (stdout) process.stdout.write(stdout.endsWith('\n') ? stdout : stdout + '\n');
   if (stderr) process.stderr.write(stderr.endsWith('\n') ? stderr : stderr + '\n');
   process.exitCode = code;
 };
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
const _M0FPB4null = _M0DTPB4Json4Null__;
const _M0MPB4Iter4nextN6constrS107GRPC16string10StringViewE = 0;
const _M0MPB4Iter4nextN6constrS108GRPC16string10StringViewE = 0;
const _M0MPB4Iter4nextN6constrS123GcE = 0;
const _M0MPB4Iter4nextN6constrS124GcE = 0;
const _M0MPB4Iter3newN6constrS141GRPC16string10StringViewE = 0;
const _M0MPB4Iter3newN6constrS147GcE = 0;
const _M0FPC16double14not__a__number = $i64_reinterpret_f64(9221120237041090561n);
const _M0FPC16double8infinity = $i64_reinterpret_f64(9218868437227405312n);
const _M0FPC16double13neg__infinity = $i64_reinterpret_f64(18442240474082181120n);
const _M0FPC28internal7strconv15range__err__str = "value out of range";
const _M0FPC28internal7strconv16syntax__err__str = "invalid syntax";
const _M0FPC28internal7strconv17min__19digit__int = 1000000000000000000n;
const _M0FPC28internal7strconv27eisel__lemire__pow10__table = [18054884314459144840n, 1671618768450675795n, 11284302696536965525n, 1044761730281672372n, 14105378370671206906n, 5917638181279478369n, 17631722963339008632n, 16620419763454123769n, 11019826852086880395n, 10387762352158827356n, 13774783565108600494n, 8373016921771146291n, 17218479456385750618n, 1242899115359157055n, 10761549660241094136n, 5388497965526861063n, 13451937075301367670n, 6735622456908576329n, 16814921344126709587n, 17642900107990496220n, 10509325840079193492n, 8720969558280366185n, 13136657300098991865n, 10901211947850457732n, 16420821625123739831n, 18238200953240460069n, 10263013515702337394n, 18316404623416369399n, 12828766894627921743n, 13672133742415685941n, 16035958618284902179n, 12478481159592219522n, 10022474136428063862n, 5493207715531443249n, 12528092670535079827n, 16089881681269079869n, 15660115838168849784n, 15500666083158961933n, 9787572398855531115n, 9687916301974351208n, 12234465498569413894n, 7498209359040551106n, 15293081873211767368n, 149389661945913074n, 9558176170757354605n, 93368538716195671n, 11947720213446693256n, 4728396691822632493n, 14934650266808366570n, 5910495864778290617n, 9334156416755229106n, 8305745933913819539n, 11667695520944036383n, 1158810380537498616n, 14584619401180045478n, 15283571030954036982n, 18230774251475056848n, 9881091751837770420n, 11394233907171910530n, 6175682344898606512n, 14242792383964888162n, 16942974967978033949n, 17803490479956110203n, 11955346673117766628n, 11127181549972568877n, 5166248661484910190n, 13908976937465711096n, 11069496845283525642n, 17386221171832138870n, 13836871056604407053n, 10866388232395086794n, 4036358391950366504n, 13582985290493858492n, 14268820026792733938n, 16978731613117323115n, 17836025033490917422n, 10611707258198326947n, 8841672636718129437n, 13264634072747908684n, 6440404777470273892n, 16580792590934885855n, 8050505971837842365n, 10362995369334303659n, 11949095260039733334n, 12953744211667879574n, 10324683056622278764n, 16192180264584849468n, 3682481783923072647n, 10120112665365530917n, 11524923151806696212n, 12650140831706913647n, 571095884476206553n, 15812676039633642058n, 14548927910877421904n, 9882922524771026286n, 13704765962725776594n, 12353653155963782858n, 7907585416552444934n, 15442066444954728573n, 661109733835780360n, 9651291528096705358n, 2719036592861056677n, 12064114410120881697n, 12622167777931096654n, 15080143012651102122n, 1942651667131707105n, 9425089382906938826n, 5825843310384704845n, 11781361728633673532n, 16505676174835656864n, 14726702160792091916n, 2185351144835019464n, 18408377700990114895n, 2731688931043774330n, 11505236063118821809n, 8624834609543440812n, 14381545078898527261n, 15392729280356688919n, 17976931348623159077n, 5405853545163697437n, 11235582092889474423n, 5684501474941004850n, 14044477616111843029n, 2493940825248868159n, 17555597020139803786n, 7729112049988473103n, 10972248137587377366n, 9442381049670183593n, 13715310171984221708n, 2579604275232953683n, 17144137714980277135n, 3224505344041192104n, 10715086071862673209n, 8932844867666826921n, 13393857589828341511n, 15777742103010921555n, 16742321987285426889n, 15110491610336264040n, 10463951242053391806n, 2526528228819083169n, 13079939052566739757n, 12381532322878629770n, 16349923815708424697n, 1641857348316123500n, 10218702384817765435n, 12555375888766046947n, 12773377981022206794n, 11082533842530170780n, 15966722476277758493n, 4629795266307937667n, 9979201547673599058n, 5199465050656154994n, 12474001934591998822n, 15722703350174969551n, 15592502418239998528n, 10430007150863936130n, 9745314011399999080n, 6518754469289960081n, 12181642514249998850n, 8148443086612450102n, 15227053142812498563n, 962181821410786819n, 9516908214257811601n, 16742264702877599426n, 11896135267822264502n, 7092772823314835570n, 14870169084777830627n, 18089338065998320271n, 9293855677986144142n, 8999993282035256217n, 11617319597482680178n, 2026619565689294464n, 14521649496853350222n, 11756646493966393888n, 18152061871066687778n, 5472436080603216552n, 11345038669416679861n, 8031958568804398249n, 14181298336770849826n, 14651634229432885715n, 17726622920963562283n, 9091170749936331336n, 11079139325602226427n, 3376138709496513133n, 13848924157002783033n, 18055231442152805128n, 17311155196253478792n, 8733981247408842698n, 10819471997658424245n, 5458738279630526686n, 13524339997073030306n, 11435108867965546262n, 16905424996341287883n, 5070514048102157020n, 10565890622713304927n, 863228270850154185n, 13207363278391631158n, 14914093393844856443n, 16509204097989538948n, 9419244705451294746n, 10318252561243461842n, 15110399977761835024n, 12897815701554327303n, 9664627935347517973n, 16122269626942909129n, 7469098900757009562n, 10076418516839318205n, 16197401859041600736n, 12595523146049147757n, 6411694268519837208n, 15744403932561434696n, 12626303854077184414n, 9840252457850896685n, 7891439908798240259n, 12300315572313620856n, 14475985904425188227n, 15375394465392026070n, 18094982380531485284n, 9609621540870016294n, 6697677969404790399n, 12012026926087520367n, 17595469498610763806n, 15015033657609400459n, 17382650854836066854n, 9384396036005875287n, 8558313775058847832n, 11730495045007344109n, 6086206200396171886n, 14663118806259180136n, 12219443768922602761n, 18328898507823975170n, 15274304711153253452n, 11455561567389984481n, 14158126462898171311n, 14319451959237480602n, 3862600023340550427n, 17899314949046850752n, 14051622066030463842n, 11187071843154281720n, 8782263791269039901n, 13983839803942852150n, 10977829739086299876n, 17479799754928565188n, 4498915137003099037n, 10924874846830353242n, 12035193997481712706n, 13656093558537941553n, 5820620459997365075n, 17070116948172426941n, 11887461593424094248n, 10668823092607766838n, 9735506505103752857n, 13336028865759708548n, 2946011094524915263n, 16670036082199635685n, 3682513868156144079n, 10418772551374772303n, 4607414176811284001n, 13023465689218465379n, 1147581702586717097n, 16279332111523081723n, 15269535183515560084n, 10174582569701926077n, 7237616480483531100n, 12718228212127407596n, 13658706619031801779n, 15897785265159259495n, 17073383273789752224n, 9936115790724537184n, 17588393573759676996n, 12420144738405671481n, 3538747893490044629n, 15525180923007089351n, 9035120885289943691n, 9703238076879430844n, 12564479580947296663n, 12129047596099288555n, 15705599476184120828n, 15161309495124110694n, 15020313326802763131n, 9475818434452569184n, 4776009810824339053n, 11844773043065711480n, 5970012263530423816n, 14805966303832139350n, 7462515329413029771n, 9253728939895087094n, 52386062455755702n, 11567161174868858867n, 9288854614924470436n, 14458951468586073584n, 6999382250228200141n, 18073689335732591980n, 8749227812785250177n, 11296055834832869987n, 14691639419845557168n, 14120069793541087484n, 13752863256379558556n, 17650087241926359355n, 17191079070474448196n, 11031304526203974597n, 8438581409832836170n, 13789130657754968246n, 15159912780718433117n, 17236413322193710308n, 9726518939043265588n, 10772758326371068942n, 15302446373756816800n, 13465947907963836178n, 9904685930341245193n, 16832434884954795223n, 3157485376071780683n, 10520271803096747014n, 8890957387685944783n, 13150339753870933768n, 1890324697752655170n, 16437924692338667210n, 2362905872190818963n, 10273702932711667006n, 6088502188546649756n, 12842128665889583757n, 16833999772538088003n, 16052660832361979697n, 7207441660390446292n, 10032913020226237310n, 16033866083812498692n, 12541141275282796638n, 10818960567910847557n, 15676426594103495798n, 4300328673033783639n, 9797766621314684873n, 16522763475928278486n, 12247208276643356092n, 6818396289628184396n, 15309010345804195115n, 8522995362035230495n, 9568131466127621947n, 3021029092058325107n, 11960164332659527433n, 17611344420355070096n, 14950205415824409292n, 8179122470161673908n, 9343878384890255807n, 14335323580705822000n, 11679847981112819759n, 13307468457454889596n, 14599809976391024699n, 12022649553391224092n, 18249762470488780874n, 10416625923311642211n, 11406101544055488046n, 11122077220497164286n, 14257626930069360058n, 4679224488766679549n, 17822033662586700072n, 15072402647813125244n, 11138771039116687545n, 9420251654883203278n, 13923463798895859431n, 16387000587031392001n, 17404329748619824289n, 15872064715361852097n, 10877706092887390181n, 3002511419460075705n, 13597132616109237726n, 8364825292752482535n, 16996415770136547158n, 1232659579085827361n, 10622759856335341973n, 14605470292210805812n, 13278449820419177467n, 4421779809981343554n, 16598062275523971834n, 915538744049291538n, 10373788922202482396n, 5183897733458195115n, 12967236152753102995n, 6479872166822743894n, 16209045190941378744n, 3488154190101041964n, 10130653244338361715n, 2180096368813151227n, 12663316555422952143n, 16560178516298602746n, 15829145694278690179n, 16088537126945865529n, 9893216058924181362n, 7749492695127472003n, 12366520073655226703n, 463493832054564196n, 15458150092069033378n, 14414425345350368957n, 9661343807543145861n, 13620701859271368502n, 12076679759428932327n, 3190819268807046916n, 15095849699286165408n, 17823582141290972357n, 9434906062053853380n, 11139738838306857723n, 11793632577567316725n, 13924673547883572154n, 14742040721959145907n, 3570783879572301480n, 18427550902448932383n, 18298537904747540562n, 11517219314030582739n, 18354115218108294707n, 14396524142538228424n, 18330958004207980480n, 17995655178172785531n, 4466953431550423984n, 11247284486357990957n, 486002885505321038n, 14059105607947488696n, 5219189625309039202n, 17573882009934360870n, 6523987031636299002n, 10983676256208975543n, 17912549950054850588n, 13729595320261219429n, 17779001419141175331n, 17161994150326524287n, 8388693718644305452n, 10726246343954077679n, 12160462601793772764n, 13407807929942597099n, 10588892233814828051n, 16759759912428246374n, 8624429273841147159n, 10474849945267653984n, 778582277723329070n, 13093562431584567480n, 973227847154161338n, 16366953039480709350n, 1216534808942701673n, 10229345649675443343n, 14595392310871352257n, 12786682062094304179n, 13632554370161802418n, 15983352577617880224n, 12429006944274865118n, 9989595361011175140n, 7768129340171790699n, 12486994201263968925n, 9710161675214738374n, 15608742751579961156n, 16749388112445810871n, 9755464219737475723n, 1244995533423855986n, 12194330274671844653n, 15391302472061983695n, 15242912843339805817n, 5404070034795315907n, 9526820527087378635n, 14906758817815542202n, 11908525658859223294n, 14021762503842039848n, 14885657073574029118n, 8303831092947774002n, 9303535670983768199n, 578208414664970847n, 11629419588729710248n, 14557818573613377271n, 14536774485912137810n, 18197273217016721589n, 18170968107390172263n, 13523219484416126178n, 11356855067118857664n, 15369541205401160717n, 14196068833898572081n, 765182433041899281n, 17745086042373215101n, 5568164059729762005n, 11090678776483259438n, 5785945546544795205n, 13863348470604074297n, 16455803970035769814n, 17329185588255092872n, 6734696907262548556n, 10830740992659433045n, 4209185567039092847n, 13538426240824291306n, 9873167977226253963n, 16923032801030364133n, 3118087934678041646n, 10576895500643977583n, 4254647968387469981n, 13221119375804971979n, 706623942056949572n, 16526399219756214973n, 14718337982853350677n, 10328999512347634358n, 11504804248497038125n, 12911249390434542948n, 5157633273766521849n, 16139061738043178685n, 6447041592208152311n, 10086913586276986678n, 6335244004343789146n, 12608641982846233347n, 17142427042284512241n, 15760802478557791684n, 16816347784428252397n, 9850501549098619803n, 1286845328412881940n, 12313126936373274753n, 15443614715798266137n, 15391408670466593442n, 5469460339465668959n, 9619630419041620901n, 8030098730593431003n, 12024538023802026126n, 14649309431669176658n, 15030672529752532658n, 9088264752731695015n, 9394170331095332911n, 10291851488884697288n, 11742712913869166139n, 8253128342678483706n, 14678391142336457674n, 5704724409920716729n, 18347988927920572092n, 16354277549255671720n, 11467493079950357558n, 998051431430019017n, 14334366349937946947n, 10470936326142299579n, 17917957937422433684n, 8476984389250486570n, 11198723710889021052n, 14521487280136329914n, 13998404638611276315n, 18151859100170412392n, 17498005798264095394n, 18078137856785627587n, 10936253623915059621n, 15910522178918405146n, 13670317029893824527n, 6053094668365842720n, 17087896287367280659n, 2954682317029915496n, 10679935179604550411n, 17987577512639554849n, 13349918974505688014n, 17872785872372055657n, 16687398718132110018n, 13117610303610293764n, 10429624198832568761n, 12810192458183821506n, 13037030248540710952n, 2177682517447613171n, 16296287810675888690n, 2722103146809516464n, 10185179881672430431n, 6313000485183335694n, 12731474852090538039n, 3279564588051781713n, 15914343565113172548n, 17934513790346890853n, 9946464728195732843n, 1985699082112030975n, 12433080910244666053n, 16317181907922202431n, 15541351137805832567n, 6561419329620589327n, 9713344461128645354n, 11018416108653950185n, 12141680576410806693n, 4549648098962661924n, 15177100720513508366n, 10298746142130715309n, 9485687950320942729n, 1825030320404309164n, 11857109937901178411n, 6892973918932774359n, 14821387422376473014n, 4004531380238580045n, 9263367138985295633n, 16337890167931276240n, 11579208923731619542n, 6587304654631931588n, 14474011154664524427n, 17457502855144690293n, 18092513943330655534n, 17210192550503474962n, 11307821214581659709n, 6144684325637283947n, 14134776518227074636n, 12292541425473992838n, 17668470647783843295n, 15365676781842491048n, 11042794154864902059n, 16521077016292638761n, 13803492693581127574n, 16039660251938410547n, 17254365866976409468n, 10826203278068237376n, 10783978666860255917n, 15989749085647424168n, 13479973333575319897n, 6152128301777116498n, 16849966666969149871n, 12301846395648783526n, 10531229166855718669n, 14606183024921571560n, 13164036458569648337n, 4422670725869800738n, 16455045573212060421n, 10140024425764638826n, 10284403483257537763n, 8643358275316593218n, 12855504354071922204n, 6192511825718353619n, 16069380442589902755n, 7740639782147942024n, 10043362776618689222n, 2532056854628769813n, 12554203470773361527n, 12388443105140738074n, 15692754338466701909n, 10873867862998534689n, 9807971461541688693n, 9102010423587778132n, 12259964326927110866n, 15989199047912110569n, 15324955408658888583n, 10763126773035362404n, 9578097130411805364n, 13644483260788183358n, 11972621413014756705n, 17055604075985229198n, 14965776766268445882n, 7484447039699372786n, 9353610478917778676n, 9289465418239495895n, 11692013098647223345n, 11611831772799369869n, 14615016373309029182n, 679731660717048624n, 18268770466636286477n, 10073036612751086588n, 11417981541647679048n, 8601490892183123069n, 14272476927059598810n, 10751863615228903837n, 17840596158824498513n, 4216457482181353988n, 11150372599265311570n, 14164500972431816002n, 13937965749081639463n, 8482254178684994195n, 17422457186352049329n, 5991131704928854840n, 10889035741470030830n, 15273672361649004035n, 13611294676837538538n, 9868718415206479236n, 17014118346046923173n, 3112525982153323237n, 10633823966279326983n, 4251171748059520975n, 13292279957849158729n, 702278666647013314n, 16615349947311448411n, 5489534351736154547n, 10384593717069655257n, 1125115960621402640n, 12980742146337069071n, 6018080969204141204n, 16225927682921336339n, 2910915193077788601n, 10141204801825835211n, 17960223060169475539n, 12676506002282294014n, 17838592806784456520n, 15845632502852867518n, 13074868971625794843n, 9903520314283042199n, 3560107088838733872n, 12379400392853802748n, 18285191916330581053n, 15474250491067253436n, 4409745821703674700n, 9671406556917033397n, 11979463175419572495n, 12089258196146291747n, 1139270913992301907n, 15111572745182864683n, 15259146697772541096n, 9444732965739290427n, 7231123676894144233n, 11805916207174113034n, 4427218577690292387n, 14757395258967641292n, 14757395258967641292n, 9223372036854775808n, 0n, 11529215046068469760n, 0n, 14411518807585587200n, 0n, 18014398509481984000n, 0n, 11258999068426240000n, 0n, 14073748835532800000n, 0n, 17592186044416000000n, 0n, 10995116277760000000n, 0n, 13743895347200000000n, 0n, 17179869184000000000n, 0n, 10737418240000000000n, 0n, 13421772800000000000n, 0n, 16777216000000000000n, 0n, 10485760000000000000n, 0n, 13107200000000000000n, 0n, 16384000000000000000n, 0n, 10240000000000000000n, 0n, 12800000000000000000n, 0n, 16000000000000000000n, 0n, 10000000000000000000n, 0n, 12500000000000000000n, 0n, 15625000000000000000n, 0n, 9765625000000000000n, 0n, 12207031250000000000n, 0n, 15258789062500000000n, 0n, 9536743164062500000n, 0n, 11920928955078125000n, 0n, 14901161193847656250n, 0n, 9313225746154785156n, 4611686018427387904n, 11641532182693481445n, 5764607523034234880n, 14551915228366851806n, 11817445422220181504n, 18189894035458564758n, 5548434740920451072n, 11368683772161602973n, 17302829768357445632n, 14210854715202003717n, 7793479155164643328n, 17763568394002504646n, 14353534962383192064n, 11102230246251565404n, 4359273333062107136n, 13877787807814456755n, 5449091666327633920n, 17347234759768070944n, 2199678564482154496n, 10842021724855044340n, 1374799102801346560n, 13552527156068805425n, 1718498878501683200n, 16940658945086006781n, 6759809616554491904n, 10587911840678754238n, 6530724019560251392n, 13234889800848442797n, 17386777061305090048n, 16543612251060553497n, 7898413271349198848n, 10339757656912845935n, 16465723340661719040n, 12924697071141057419n, 15970468157399760896n, 16155871338926321774n, 15351399178322313216n, 10097419586828951109n, 4982938468024057856n, 12621774483536188886n, 10840359103457460224n, 15777218104420236108n, 4327076842467049472n, 9860761315262647567n, 11927795063396681728n, 12325951644078309459n, 10298057810818464256n, 15407439555097886824n, 8260886245095692416n, 9629649721936179265n, 5163053903184807760n, 12037062152420224081n, 11065503397408397604n, 15046327690525280101n, 18443565265187884909n, 9403954806578300063n, 13833071299956122020n, 11754943508222875079n, 12679653106517764621n, 14693679385278593849n, 11237880364719817872n, 18367099231598242312n, 212292400617608628n, 11479437019748901445n, 132682750386005392n, 14349296274686126806n, 4777539456409894645n, 17936620343357658507n, 15195296357367144114n, 11210387714598536567n, 7191217214140771119n, 14012984643248170709n, 4377335499248575995n, 17516230804060213386n, 10083355392488107898n, 10947644252537633366n, 10913783138732455340n, 13684555315672041708n, 4418856886560793367n, 17105694144590052135n, 5523571108200991709n, 10691058840368782584n, 10369760970266701674n, 13363823550460978230n, 12962201212833377092n, 16704779438076222788n, 6979379479186945558n, 10440487148797639242n, 13585484211346616781n, 13050608935997049053n, 7758483227328495169n, 16313261169996311316n, 14309790052588006865n, 10195788231247694572n, 18166990819722280098n, 12744735289059618216n, 4261994450943298507n, 15930919111324522770n, 5327493063679123134n, 9956824444577826731n, 7941369183226839863n, 12446030555722283414n, 5315025460606161924n, 15557538194652854267n, 15867153862612478214n, 9723461371658033917n, 7611128154919104931n, 12154326714572542396n, 14125596212076269068n, 15192908393215677995n, 17656995265095336336n, 9495567745759798747n, 8729779031470891258n, 11869459682199748434n, 6300537770911226168n, 14836824602749685542n, 17099044250493808518n, 9273015376718553464n, 6075216638131242420n, 11591269220898191830n, 7594020797664053025n, 14489086526122739788n, 269153960225290473n, 18111358157653424735n, 336442450281613091n, 11319598848533390459n, 7127805559067090038n, 14149498560666738074n, 4298070930406474644n, 17686873200833422592n, 14595960699862869113n, 11054295750520889120n, 9122475437414293195n, 13817869688151111400n, 11403094296767866494n, 17272337110188889250n, 14253867870959833118n, 10795210693868055781n, 13520353437777283602n, 13494013367335069727n, 3065383741939440791n, 16867516709168837158n, 17666787732706464701n, 10542197943230523224n, 6430056314514152534n, 13177747429038154030n, 8037570393142690668n, 16472184286297692538n, 823590954573587527n, 10295115178936057836n, 5126430365035880108n, 12868893973670072295n, 6408037956294850135n, 16086117467087590369n, 3398361426941174765n, 10053823416929743980n, 13653190937906703988n, 12567279271162179975n, 17066488672383379985n, 15709099088952724969n, 16721424822051837077n, 9818186930595453106n, 3533361486141316317n, 12272733663244316382n, 13640073894531421205n, 15340917079055395478n, 7826720331309500698n, 9588073174409622174n, 280014188641050032n, 11985091468012027717n, 9573389772656088348n, 14981364335015034646n, 16578423234247498339n, 9363352709384396654n, 5749828502977298558n, 11704190886730495817n, 16410657665576399005n, 14630238608413119772n, 6678264026688335045n, 18287798260516399715n, 8347830033360418806n, 11429873912822749822n, 2911550761636567802n, 14287342391028437277n, 12862810488900485560n, 17859177988785546597n, 2243455055843443238n, 11161986242990966623n, 3708002419115845976n, 13952482803738708279n, 23317005467419566n, 17440603504673385348n, 13864204312116438170n, 10900377190420865842n, 17888499731927549664n, 13625471488026082303n, 13137252628054661272n, 17031839360032602879n, 11809879766640938686n, 10644899600020376799n, 14298703881791668535n, 13306124500025470999n, 13261693833812197764n, 16632655625031838749n, 11965431273837859301n, 10395409765644899218n, 9784237555362356015n, 12994262207056124023n, 3006924907348169211n, 16242827758820155028n, 17593714189467375226n, 10151767349262596893n, 1772699331562333708n, 12689709186578246116n, 6827560182880305039n, 15862136483222807645n, 8534450228600381299n, 9913835302014254778n, 7639874402088932264n, 12392294127517818473n, 326470965756389522n, 15490367659397273091n, 5019774725622874806n, 9681479787123295682n, 831516194300602802n, 12101849733904119602n, 10262767279730529310n, 15127312167380149503n, 3605087062808385830n, 9454570104612593439n, 9170708441896323000n, 11818212630765741799n, 6851699533943015846n, 14772765788457177249n, 3952938399001381903n, 9232978617785735780n, 13999801545444333449n, 11541223272232169725n, 17499751931805416812n, 14426529090290212157n, 8039631859474607303n, 18033161362862765196n, 14661225842770647033n, 11270725851789228247n, 18386638188586430203n, 14088407314736535309n, 18371611717305649850n, 17610509143420669137n, 9129456591349898601n, 11006568214637918210n, 17235125415662156385n, 13758210268297397763n, 12320534732722919674n, 17197762835371747204n, 10788982397476261688n, 10748601772107342002n, 15966486035277439363n, 13435752215134177503n, 10734735507242023396n, 16794690268917721879n, 8806733365625141341n, 10496681418073576174n, 12421737381156795194n, 13120851772591970218n, 6303799689591218185n, 16401064715739962772n, 17103121648843798539n, 10250665447337476733n, 1466078993672598279n, 12813331809171845916n, 6444284760518135752n, 16016664761464807395n, 8055355950647669691n, 10010415475915504622n, 2728754459941099604n, 12513019344894380777n, 12634315111781150314n, 15641274181117975972n, 1957835834444274180n, 9775796363198734982n, 10447019433382447170n, 12219745453998418728n, 3835402254873283155n, 15274681817498023410n, 4794252818591603944n, 9546676135936264631n, 7608094030047140369n, 11933345169920330789n, 4898431519131537557n, 14916681462400413486n, 10734725417341809851n, 9322925914000258429n, 2097517367411243253n, 11653657392500323036n, 7233582727691441970n, 14567071740625403795n, 9041978409614302462n, 18208839675781754744n, 6690786993590490174n, 11380524797363596715n, 4181741870994056359n, 14225655996704495894n, 615491320315182544n, 17782069995880619867n, 9992736187248753989n, 11113793747425387417n, 3939617107816777291n, 13892242184281734271n, 9536207403198359517n, 17365302730352167839n, 7308573235570561493n, 10853314206470104899n, 11485387299872682789n, 13566642758087631124n, 9745048106413465582n, 16958303447609538905n, 12181310133016831978n, 10598939654755961816n, 695789805494438130n, 13248674568444952270n, 869737256868047663n, 16560843210556190337n, 10310543607939835386n, 10350527006597618960n, 17973304801030866876n, 12938158758247023701n, 4019886927579031980n, 16172698447808779626n, 9636544677901177879n, 10107936529880487266n, 10634526442115624078n, 12634920662350609083n, 4069786015789754290n, 15793650827938261354n, 475546501309804958n, 9871031767461413346n, 4908902581746016003n, 12338789709326766682n, 15359500264037295811n, 15423487136658458353n, 9976003293191843956n, 9639679460411536470n, 17764217104313372233n, 12049599325514420588n, 12981899343536939483n, 15061999156893025735n, 16227374179421174354n, 9413749473058141084n, 17059637889779315827n, 11767186841322676356n, 2877803288514593168n, 14708983551653345445n, 3597254110643241460n, 18386229439566681806n, 9108253656731439729n, 11491393399729176129n, 1080972517029761926n, 14364241749661470161n, 5962901664714590312n, 17955302187076837701n, 12065313099320625794n, 11222063866923023563n, 9846663696289085073n, 14027579833653779454n, 7696643601933968437n, 17534474792067224318n, 397432465562684739n, 10959046745042015198n, 14083453346258841674n, 13698808431302518998n, 8380944645968776284n, 17123510539128148748n, 1252808770606194547n, 10702194086955092967n, 10006377518483647400n, 13377742608693866209n, 7896285879677171346n, 16722178260867332761n, 14482043368023852087n, 10451361413042082976n, 2133748077373825698n, 13064201766302603720n, 2667185096717282123n, 16330252207878254650n, 3333981370896602653n, 10206407629923909156n, 6695424375237764562n, 12758009537404886445n, 8369280469047205703n, 15947511921756108056n, 15073286604736395033n, 9967194951097567535n, 9420804127960246895n, 12458993688871959419n, 7164319141522920715n, 15573742111089949274n, 4343712908476262990n, 9733588819431218296n, 7326506586225052273n, 12166986024289022870n, 9158133232781315341n, 15208732530361278588n, 2224294504121868368n, 9505457831475799117n, 10613556101930943538n, 11881822289344748896n, 17878631145841067327n, 14852277861680936121n, 3901544858591782542n, 9282673663550585075n, 13967680582688333849n, 11603342079438231344n, 12847914709933029407n, 14504177599297789180n, 16059893387416286759n, 18130221999122236476n, 1628122660560806833n, 11331388749451397797n, 10240948699705280078n, 14164235936814247246n, 17412871893058988002n, 17705294921017809058n, 12542717829468959195n, 11065809325636130661n, 12450884661845487401n, 13832261657045163327n, 1728547772024695539n, 17290327071306454158n, 15995742770313033136n, 10806454419566533849n, 5385653213018257806n, 13508068024458167311n, 11343752534700210161n, 16885085030572709139n, 9568004649947874797n, 10553178144107943212n, 3674159897003727796n, 13191472680134929015n, 4592699871254659745n, 16489340850168661269n, 1129188820640936778n, 10305838031355413293n, 3011586022114279438n, 12882297539194266616n, 8376168546070237202n, 16102871923992833270n, 10470210682587796502n, 10064294952495520794n, 1932195658189984910n, 12580368690619400992n, 11638616609592256945n, 15725460863274251240n, 14548270761990321182n, 9828413039546407025n, 9092669226243950738n, 12285516299433008781n, 15977522551232326327n, 15356895374291260977n, 6136845133758244197n, 9598059608932038110n, 15364743254667372383n, 11997574511165047638n, 9982557031479439671n, 14996968138956309548n, 3254824252494523781n, 9373105086847693467n, 11257637194663853171n, 11716381358559616834n, 9460360474902428559n, 14645476698199521043n, 2602078556773259891n, 18306845872749401303n, 17087656251248738576n, 11441778670468375814n, 17597314184671543466n, 14302223338085469768n, 12773270693984653525n, 17877779172606837210n, 15966588367480816906n, 11173611982879273256n, 14590803748102898470n, 13967014978599091570n, 18238504685128623088n, 17458768723248864463n, 13574758819556003052n, 10911730452030540289n, 15401753289863583763n, 13639663065038175362n, 5417133557047315992n, 17049578831297719202n, 15994788983163920798n, 10655986769561074501n, 14608429132904838403n, 13319983461951343127n, 4425478360848884291n, 16649979327439178909n, 920161932633717460n, 10406237079649486818n, 2880944217109767365n, 13007796349561858522n, 12824552308241985014n, 16259745436952323153n, 6807318348447705459n, 10162340898095201970n, 15783789013848285672n, 12702926122619002463n, 10506364230455581282n, 15878657653273753079n, 8521269269642088699n, 9924161033296095674n, 12243322321167387293n, 12405201291620119593n, 6080780864604458308n, 15506501614525149491n, 12212662099182960789n, 9691563509078218432n, 5327070802775656541n, 12114454386347773040n, 6658838503469570676n, 15143067982934716300n, 8323548129336963345n, 9464417489334197687n, 14425589617690377899n, 11830521861667747109n, 13420301003685584469n, 14788152327084683887n, 2940318199324816875n, 9242595204427927429n, 8755227902219092403n, 11553244005534909286n, 15555720896201253407n, 14441555006918636608n, 10221279083396790951n, 18051943758648295760n, 12776598854245988689n, 11282464849155184850n, 7985374283903742931n, 14103081061443981063n, 758345818024902856n, 17628851326804976328n, 14782990327813292282n, 11018032079253110205n, 9239368954883307676n, 13772540099066387756n, 16160897212031522499n, 17215675123832984696n, 1754377441329851508n, 10759796952395615435n, 1096485900831157192n, 13449746190494519293n, 15205665431321110202n, 16812182738118149117n, 5172023733869224041n, 10507614211323843198n, 5538357842881958977n, 13134517764154803997n, 16146319340457224530n, 16418147205193504997n, 6347841120289366950n, 10261342003245940623n, 6273243709394548296n, 12826677504057425779n, 3229868618315797466n, 16033346880071782223n, 17872393828176910545n, 10020841800044863889n, 18087775170251650946n, 12526052250056079862n, 8774660907532399971n, 15657565312570099828n, 1744954097560724156n, 9785978320356312392n, 10313968347830228405n, 12232472900445390490n, 12892460434787785506n, 15290591125556738113n, 6892203506629956075n, 9556619453472961320n, 15836842237712192307n, 11945774316841201651n, 1349308723430688768n, 14932217896051502063n, 15521693959570524672n, 9332636185032188789n, 16618587752372659776n, 11665795231290235987n, 6938176635183661008n, 14582244039112794984n, 4061034775552188356n, 18227805048890993730n, 5076293469440235445n, 11392378155556871081n, 7784369436827535057n, 14240472694446088851n, 14342147814461806725n, 17800590868057611064n, 13315998749649870503n, 11125369292536006915n, 8322499218531169064n, 13906711615670008644n, 5791438004736573426n, 17383389519587510805n, 7239297505920716783n, 10864618449742194253n, 6830403950414141941n, 13580773062177742816n, 13149690956445065330n, 16975966327722178520n, 16437113695556331663n, 10609978954826361575n, 10273196059722707289n, 13262473693532951969n, 8229809056225996208n, 16578092116916189961n, 14898947338709883164n, 10361307573072618726n, 2394313059052595121n, 12951634466340773407n, 12216263360670519709n, 16189543082925966759n, 10658643182410761733n, 10118464426828729224n, 13579181016647807939n, 12648080533535911530n, 16973976270809759924n, 15810100666919889413n, 11994098301657424097n, 9881312916824930883n, 9802154447749584012n, 12351641146031163604n, 7641007041259592112n, 15439551432538954505n, 9551258801574490140n, 9649719645336846565n, 17498751797052526097n, 12062149556671058207n, 8038381691033493909n, 15077686945838822759n, 5436291095364479483n];
const _M0FPC28internal7strconv12double__info = new _M0TPC28internal7strconv9FloatInfo(52, 11, -1023);
const _M0FPC28internal7strconv25min__exponent__fast__path = 18446744073709551594n;
const _M0FPC28internal7strconv25max__exponent__fast__path = 22n;
const _M0FPC28internal7strconv36max__exponent__disguised__fast__path = 37n;
const _M0FPC28internal7strconv25max__mantissa__fast__path = 9007199254740992n;
const _M0FPC28internal7strconv6powtab = [1, 3, 6, 9, 13, 16, 19, 23, 26, 29, 33, 36, 39, 43, 46, 49, 53, 56, 59];
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1212 = { _0: 0, _1: "" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1213 = { _0: 1, _1: "5" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1214 = { _0: 1, _1: "25" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1215 = { _0: 1, _1: "125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1216 = { _0: 2, _1: "625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1217 = { _0: 2, _1: "3125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1218 = { _0: 2, _1: "15625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1219 = { _0: 3, _1: "78125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1220 = { _0: 3, _1: "390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1221 = { _0: 3, _1: "1953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1222 = { _0: 4, _1: "9765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1223 = { _0: 4, _1: "48828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1224 = { _0: 4, _1: "244140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1225 = { _0: 4, _1: "1220703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1226 = { _0: 5, _1: "6103515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1227 = { _0: 5, _1: "30517578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1228 = { _0: 5, _1: "152587890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1229 = { _0: 6, _1: "762939453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1230 = { _0: 6, _1: "3814697265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1231 = { _0: 6, _1: "19073486328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1232 = { _0: 7, _1: "95367431640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1233 = { _0: 7, _1: "476837158203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1234 = { _0: 7, _1: "2384185791015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1235 = { _0: 7, _1: "11920928955078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1236 = { _0: 8, _1: "59604644775390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1237 = { _0: 8, _1: "298023223876953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1238 = { _0: 8, _1: "1490116119384765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1239 = { _0: 9, _1: "7450580596923828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1240 = { _0: 9, _1: "37252902984619140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1241 = { _0: 9, _1: "186264514923095703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1242 = { _0: 10, _1: "931322574615478515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1243 = { _0: 10, _1: "4656612873077392578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1244 = { _0: 10, _1: "23283064365386962890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1245 = { _0: 10, _1: "116415321826934814453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1246 = { _0: 11, _1: "582076609134674072265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1247 = { _0: 11, _1: "2910383045673370361328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1248 = { _0: 11, _1: "14551915228366851806640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1249 = { _0: 12, _1: "72759576141834259033203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1250 = { _0: 12, _1: "363797880709171295166015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1251 = { _0: 12, _1: "1818989403545856475830078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1252 = { _0: 13, _1: "9094947017729282379150390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1253 = { _0: 13, _1: "45474735088646411895751953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1254 = { _0: 13, _1: "227373675443232059478759765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1255 = { _0: 13, _1: "1136868377216160297393798828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1256 = { _0: 14, _1: "5684341886080801486968994140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1257 = { _0: 14, _1: "28421709430404007434844970703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1258 = { _0: 14, _1: "142108547152020037174224853515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1259 = { _0: 15, _1: "710542735760100185871124267578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1260 = { _0: 15, _1: "3552713678800500929355621337890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1261 = { _0: 15, _1: "17763568394002504646778106689453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1262 = { _0: 16, _1: "88817841970012523233890533447265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1263 = { _0: 16, _1: "444089209850062616169452667236328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1264 = { _0: 16, _1: "2220446049250313080847263336181640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1265 = { _0: 16, _1: "11102230246251565404236316680908203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1266 = { _0: 17, _1: "55511151231257827021181583404541015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1267 = { _0: 17, _1: "277555756156289135105907917022705078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1268 = { _0: 17, _1: "1387778780781445675529539585113525390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1269 = { _0: 18, _1: "6938893903907228377647697925567626953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1270 = { _0: 18, _1: "34694469519536141888238489627838134765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1271 = { _0: 18, _1: "173472347597680709441192448139190673828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1272 = { _0: 19, _1: "867361737988403547205962240695953369140625" };
const _M0FPC28internal7strconv19left__shift__cheats = [_M0FPC28internal7strconv19left__shift__cheatsN5tupleS1212, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1213, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1214, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1215, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1216, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1217, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1218, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1219, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1220, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1221, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1222, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1223, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1224, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1225, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1226, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1227, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1228, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1229, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1230, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1231, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1232, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1233, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1234, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1235, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1236, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1237, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1238, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1239, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1240, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1241, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1242, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1243, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1244, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1245, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1246, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1247, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1248, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1249, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1250, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1251, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1252, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1253, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1254, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1255, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1256, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1257, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1258, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1259, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1260, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1261, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1262, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1263, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1264, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1265, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1266, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1267, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1268, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1269, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1270, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1271, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1272];
const _M0FPC28internal7strconv10int__pow10 = [1n, 10n, 100n, 1000n, 10000n, 100000n, 1000000n, 10000000n, 100000000n, 1000000000n, 10000000000n, 100000000000n, 1000000000000n, 10000000000000n, 100000000000000n, 1000000000000000n];
const _M0FPC28internal7strconv5table = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1e+012, 1e+013, 1e+014, 1e+015, 1e+016, 1e+017, 1e+018, 1e+019, 1e+020, 1e+021, 1e+022, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const _M0FPC28internal7strconv12checked__mulN6constrS1409 = 0n;
const _M0FPC14json17int__pow10__table = [1n, 10n, 100n, 1000n, 10000n, 100000n, 1000000n, 10000000n, 100000000n, 1000000000n, 10000000000n, 100000000000n, 1000000000000n, 10000000000000n, 100000000000000n, 1000000000000000n];
const _M0FPC14json12pow10__table = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1e+012, 1e+013, 1e+014, 1e+015, 1e+016, 1e+017, 1e+018, 1e+019, 1e+020, 1e+021, 1e+022, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const _M0FPC14json12checked__mulN6constrS1676 = 0n;
const _M0MP38BeiLaDuo12cidr_2daudit5nginx6Limits7defaultN6recordS2671 = new _M0TP38BeiLaDuo12cidr_2daudit5nginx6Limits(64, 1048576, 262144, 16, 256, 32, 20000, 2048, 4096, 1000000);
const _M0FPB4seed = _M0FPB12random__seed();
const _M0FP48BeiLaDuo12cidr_2daudit3cmd11nginx_2dcli13file__failureN7_2abindS3222 = "unsupported";
const _M0MPC16string10StringView4findN6constrS348 = 0;
const _M0FP38BeiLaDuo12cidr_2daudit3cli15validate__entryN7_2abindS2923 = "\u0000";
const _M0FP38BeiLaDuo12cidr_2daudit3cli15validate__entryN7_2abindS2924 = ":";
const _M0FP38BeiLaDuo12cidr_2daudit3cli15validate__entryN7_2abindS2925 = "/";
const _M0FP38BeiLaDuo12cidr_2daudit3cli15validate__entryN7_2abindS2926 = "\\";
const _M0FP38BeiLaDuo12cidr_2daudit3cli15validate__entryN7_2abindS2927 = "\\";
const _M0FP38BeiLaDuo12cidr_2daudit3cli15validate__entryN7_2abindS2928 = "/";
const _M0FP38BeiLaDuo12cidr_2daudit3cli15validate__entryN7_2abindS2929 = "/";
const _M0FP38BeiLaDuo12cidr_2daudit3cli15validate__entryN7_2abindS2930 = "..";
const _M0FP38BeiLaDuo12cidr_2daudit3cli15validate__entryN7_2abindS2931 = "";
const _M0MP28BeiLaDuo12cidr_2daudit9CidrBlock3newN6constrS2041 = new _M0DTPC16result6ResultGRP28BeiLaDuo12cidr_2daudit9CidrBlocksE3Err("CIDR prefix must be between 0 and 32");
const _M0FP28BeiLaDuo12cidr_2daudit13parse__prefixN6constrS2028 = new _M0DTPC16result6ResultGisE3Err("CIDR prefix must be between 0 and 32");
const _M0FP28BeiLaDuo12cidr_2daudit13parse__prefixN6constrS2029 = new _M0DTPC16result6ResultGisE3Err("empty CIDR prefix");
const _M0MP28BeiLaDuo12cidr_2daudit4IPv45parseN6constrS2044 = new _M0DTPC16result6ResultGRP28BeiLaDuo12cidr_2daudit4IPv4sE3Err("empty IPv4 address");
const _M0MP28BeiLaDuo12cidr_2daudit9CidrBlock5parseN6constrS2057 = new _M0DTPC16result6ResultGRP28BeiLaDuo12cidr_2daudit9CidrBlocksE3Err("empty CIDR block");
const _M0FP38BeiLaDuo12cidr_2daudit3cli15config__failureN7_2abindS2915 = "unsupported";
const _M0FP38BeiLaDuo12cidr_2daudit5nginx23normalize__source__pathN7_2abindS2277 = "//";
const _M0FP38BeiLaDuo12cidr_2daudit5nginx23normalize__source__pathN7_2abindS2278 = "://";
const _M0FP38BeiLaDuo12cidr_2daudit5nginx23normalize__source__pathN7_2abindS2279 = "/";
const _M0FP38BeiLaDuo12cidr_2daudit5nginx23normalize__source__pathN7_2abindS2280 = "/";
const _M0FP38BeiLaDuo12cidr_2daudit5nginx23normalize__source__pathN7_2abindS2281 = ":";
const _M0FP38BeiLaDuo12cidr_2daudit5nginx23normalize__source__pathN7_2abindS2282 = ":";
const _M0FP38BeiLaDuo12cidr_2daudit5nginx23normalize__source__pathN7_2abindS2283 = "/";
const _M0FP210LuoYunxin19moonnginx17strip__if__parensN7_2abindS2175 = "(";
const _M0FP210LuoYunxin19moonnginx17strip__if__parensN7_2abindS2176 = ")";
const _M0FP210LuoYunxin19moonnginx11parse__stmtN6constrS2213 = new _M0DTP210LuoYunxin19moonnginx8NgxError6Syntax("premature end of file");
const _M0FP210LuoYunxin19moonnginx11parse__stmtN6constrS2214 = new _M0DTPC16result6ResultGRP210LuoYunxin19moonnginx9DirectiveRP210LuoYunxin19moonnginx8NgxErrorE3Err(_M0FP210LuoYunxin19moonnginx11parse__stmtN6constrS2213);
const _M0FP38BeiLaDuo12cidr_2daudit5nginx21upstream__error__lineN7_2abindS2329 = "line ";
const _M0FP38BeiLaDuo12cidr_2daudit5nginx14wildcard__pathN7_2abindS2430 = "*";
const _M0FP38BeiLaDuo12cidr_2daudit5nginx14wildcard__pathN7_2abindS2431 = "?";
const _M0FP38BeiLaDuo12cidr_2daudit5nginx22include__path__matchesN7_2abindS2388 = ".";
const _M0FP38BeiLaDuo12cidr_2daudit5nginx22include__path__matchesN7_2abindS2389 = ".";
const _M0FP38BeiLaDuo12cidr_2daudit5nginx22absolute__source__pathN7_2abindS2402 = "/";
const _M0FP38BeiLaDuo12cidr_2daudit5nginx25within__source__directoryN7_2abindS2404 = "/";
const _M0FP38BeiLaDuo12cidr_2daudit5nginx22resolve__include__pathN7_2abindS2408 = "\\";
const _M0FP38BeiLaDuo12cidr_2daudit5nginx22resolve__include__pathN7_2abindS2409 = "$";
const _M0FP38BeiLaDuo12cidr_2daudit5nginx22resolve__include__pathN7_2abindS2410 = "[";
const _M0FP38BeiLaDuo12cidr_2daudit5nginx22resolve__include__pathN7_2abindS2411 = "]";
const _M0FP38BeiLaDuo12cidr_2daudit5nginx22resolve__include__pathN7_2abindS2412 = "**";
const _M0FP38BeiLaDuo12cidr_2daudit5nginx22resolve__include__pathN7_2abindS2413 = "*";
const _M0FP38BeiLaDuo12cidr_2daudit5nginx22resolve__include__pathN7_2abindS2414 = "?";
const _M0FP38BeiLaDuo12cidr_2daudit5nginx12expand__fileN7_2abindS2433 = " -> ";
const _M0FP38BeiLaDuo12cidr_2daudit5nginx13make__contextN7_2abindS2723 = ":";
const _M0FP38BeiLaDuo12cidr_2daudit5nginx13make__contextN7_2abindS2724 = "$";
const _M0FP38BeiLaDuo12cidr_2daudit5nginx13make__contextN7_2abindS2725 = " ";
const _M0FP38BeiLaDuo12cidr_2daudit3cli13parse__limitsN7_2abindS3006 = ",";
const _M0FP38BeiLaDuo12cidr_2daudit3cli13parse__limitsN7_2abindS3007 = "=";
const _M0FP38BeiLaDuo12cidr_2daudit3cli11parse__argsN7_2abindS3024 = "-";
const _M0FP38BeiLaDuo12cidr_2daudit3cli11parse__argsN7_2abindS3025 = "--";
const _M0FP38BeiLaDuo12cidr_2daudit3cli11parse__argsN7_2abindS3026 = "\u0000";
const _M0FP38BeiLaDuo12cidr_2daudit3cli11parse__argsN7_2abindS3027 = "://";
const _M0FP38BeiLaDuo12cidr_2daudit6fileio17parent__directoryN7_2abindS3055 = "/";
const _M0FP38BeiLaDuo12cidr_2daudit6fileio17parent__directoryN7_2abindS3056 = "/";
const _M0FPC28internal7strconv17parse__scientificN8exp__numS1310 = 0n;
const _M0FPC28internal7strconv17check__underscoreN25_2atransition__table__222S1413 = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 0, 1, 2, 5];
const _M0FPC28internal7strconv15parse__inf__nanN25_2atransition__table__304S1389 = [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 3, 4, 14, 14, 14, 14, 14, 14, 14, 7, 14, 14, 14, 14, 5, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 6, 14, 14, 14, 0, 14, 14, 14, 14, 14, 14, 14, 14, 14, 8, 14, 14, 14, 14, 14, 1, 14, 14, 9, 14, 14, 14, 14, 14, 14, 14, 14, 10, 14, 14, 14, 14, 14, 14, 11, 14, 14, 14, 14, 14, 14, 14, 14, 14, 12, 14, 14, 14, 14, 14, 14, 14, 14, 13, 14, 1, 14, 14, 14, 14, 14, 14, 14];
const _M0FP38BeiLaDuo12cidr_2daudit6fileio16include__targetsN7_2abindS3114 = "*";
const _M0FP38BeiLaDuo12cidr_2daudit6fileio16include__targetsN7_2abindS3115 = "?";
const _M0FP38BeiLaDuo12cidr_2daudit6fileio13load__sourcesN7_2abindS3204 = "/";
const _M0FP38BeiLaDuo12cidr_2daudit6fileio13load__sourcesN7_2abindS3205 = ":";
function _M0FPB13consume4__acc(acc, input) {
  const _p = (acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0;
  const _p$2 = 17;
  return Math.imul(_p << _p$2 | (_p >>> (32 - _p$2 | 0) | 0), 668265263) | 0;
}
function _M0MPB13StringBuilder13write__objectGdE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGdE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGiE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGiE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
  return new _M0TPB13StringBuilder("");
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0FPB32code__point__of__surrogate__pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function _M0MPC14byte4Byte7to__hexN14to__hex__digitS41(i) {
  if (i < 10) {
    const _p = 48;
    const _p$2 = (i + _p | 0) & 255;
    return _p$2;
  } else {
    const _p = 97;
    const _p$2 = (i + _p | 0) & 255;
    const _p$3 = 10;
    const _p$4 = (_p$2 - _p$3 | 0) & 255;
    return _p$4;
  }
}
function _M0MPC14byte4Byte7to__hex(b) {
  const _self = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _p = 16;
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS41((b / _p | 0) & 255));
  const _p$2 = 16;
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS41((b % _p$2 | 0) & 255));
  const _p$3 = _self;
  return _p$3.val;
}
function _M0MPC16string10StringView21clamped__view_2einner(self, start, end) {
  const len = self.end - self.start | 0;
  let lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _e = _Some;
    hi = _e < 0 ? 0 : _e > len ? len : _e;
  }
  const str = self.str;
  const base = self.start;
  let _tmp;
  if (lo > 0) {
    let _tmp$2;
    if (lo < len) {
      let _tmp$3;
      const _p = str.charCodeAt(base + lo | 0);
      if (_p >= 56320 && _p <= 57343) {
        const _p$2 = str.charCodeAt((base + lo | 0) - 1 | 0);
        _tmp$3 = _p$2 >= 55296 && _p$2 <= 56319;
      } else {
        _tmp$3 = false;
      }
      _tmp$2 = _tmp$3;
    } else {
      _tmp$2 = false;
    }
    _tmp = _tmp$2;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    lo = lo + 1 | 0;
  }
  let _tmp$2;
  if (hi > 0) {
    let _tmp$3;
    if (hi < len) {
      let _tmp$4;
      const _p = str.charCodeAt(base + hi | 0);
      if (_p >= 56320 && _p <= 57343) {
        const _p$2 = str.charCodeAt((base + hi | 0) - 1 | 0);
        _tmp$4 = _p$2 >= 55296 && _p$2 <= 56319;
      } else {
        _tmp$4 = false;
      }
      _tmp$3 = _tmp$4;
    } else {
      _tmp$3 = false;
    }
    _tmp$2 = _tmp$3;
  } else {
    _tmp$2 = false;
  }
  if (_tmp$2) {
    hi = hi - 1 | 0;
  }
  return lo >= hi ? new _M0TPC16string10StringView(str, base + lo | 0, base + lo | 0) : new _M0TPC16string10StringView(str, base + lo | 0, base + hi | 0);
}
function _M0MPC16string10StringView12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  if (start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0))) {
    return new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0);
  } else {
    return $panic();
  }
}
function _M0IP016_24default__implPB2Eq10not__equalGRP38BeiLaDuo12cidr_2daudit3cli7CommandE(x, y) {
  return !_M0IP38BeiLaDuo12cidr_2daudit3cli7CommandPB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRP28BeiLaDuo12cidr_2daudit10RuleActionE(x, y) {
  return !_M0IP28BeiLaDuo12cidr_2daudit10RuleActionPB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB7Compare6op__ltGsE(x, y) {
  return _M0IPC16string6StringPB7Compare7compare(x, y) < 0;
}
function _M0IP016_24default__implPB7Compare6op__gtGsE(x, y) {
  return _M0IPC16string6StringPB7Compare7compare(x, y) > 0;
}
function _M0IP016_24default__implPB7Compare6op__geGsE(x, y) {
  return _M0IPC16string6StringPB7Compare7compare(x, y) >= 0;
}
function _M0FPB14avalanche__acc(acc) {
  let acc$2 = acc;
  acc$2 = acc$2 ^ (acc$2 >>> 15 | 0);
  acc$2 = Math.imul(acc$2, -2048144777) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 13 | 0);
  acc$2 = Math.imul(acc$2, -1028477379) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 16 | 0);
  return acc$2;
}
function _M0FPB13finalize__acc(acc) {
  return _M0FPB14avalanche__acc(acc);
}
function _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC16string6String21clamped__view_2einner(self, start, end) {
  const len = self.length;
  let lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _e = _Some;
    hi = _e < 0 ? 0 : _e > len ? len : _e;
  }
  let _tmp;
  if (lo > 0) {
    let _tmp$2;
    if (lo < len) {
      let _tmp$3;
      const _p = self.charCodeAt(lo);
      if (_p >= 56320 && _p <= 57343) {
        const _p$2 = self.charCodeAt(lo - 1 | 0);
        _tmp$3 = _p$2 >= 55296 && _p$2 <= 56319;
      } else {
        _tmp$3 = false;
      }
      _tmp$2 = _tmp$3;
    } else {
      _tmp$2 = false;
    }
    _tmp = _tmp$2;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    lo = lo + 1 | 0;
  }
  let _tmp$2;
  if (hi > 0) {
    let _tmp$3;
    if (hi < len) {
      let _tmp$4;
      const _p = self.charCodeAt(hi);
      if (_p >= 56320 && _p <= 57343) {
        const _p$2 = self.charCodeAt(hi - 1 | 0);
        _tmp$4 = _p$2 >= 55296 && _p$2 <= 56319;
      } else {
        _tmp$4 = false;
      }
      _tmp$3 = _tmp$4;
    } else {
      _tmp$3 = false;
    }
    _tmp$2 = _tmp$3;
  } else {
    _tmp$2 = false;
  }
  if (_tmp$2) {
    hi = hi - 1 | 0;
  }
  return lo >= hi ? new _M0TPC16string10StringView(self, lo, lo) : new _M0TPC16string10StringView(self, lo, hi);
}
function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
  _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String21clamped__view_2einner(value, start, start + len | 0));
}
function _M0IP016_24default__implPB4Show6outputGdE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16double6DoublePB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGiE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC13int3IntPB4Show10to__string(self));
}
function _M0MPB4Iter4nextGRPC16string10StringViewE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS108GRPC16string10StringViewE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS107GRPC16string10StringViewE;
    }
  }
  return result;
}
function _M0MPB4Iter4nextGcE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === -1) {
    self.size_hint = _M0MPB4Iter4nextN6constrS124GcE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS123GcE;
    }
  }
  return result;
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0MPB4Iter3newGRPC16string10StringViewE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS141GRPC16string10StringViewE;
  }
  return new _M0TPB4IterGRPC16string10StringViewE(f, size_hint$2);
}
function _M0MPB4Iter3newGcE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS147GcE;
  }
  return new _M0TPB4IterGcE(f, size_hint$2);
}
function _M0MPC15array10FixedArray21clamped__view_2einnerGkE(self, start, end) {
  const len = self.length;
  const lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _end = _Some;
    hi = _end < 0 ? 0 : _end > len ? len : _end;
  }
  const count = hi > lo ? hi - lo | 0 : 0;
  const _bind = self;
  return new _M0TPB9ArrayViewGkE(_bind, lo, lo + count | 0);
}
function _M0MPC16string10StringView11code__units(self) {
  const _p = self.str.length;
  let _tmp;
  if (_p <= 0) {
    _tmp = [];
  } else {
    const _p$2 = 0;
    const _p$3 = $make_array_len_and_init(_p, self.str.charCodeAt(_p$2));
    let _tmp$2 = 1;
    while (true) {
      const _p$4 = _tmp$2;
      if (_p$4 < _p) {
        if (_p$4 >>> 0 < _p$3.length) {
          _p$3[_p$4] = self.str.charCodeAt(_p$4);
        } else {
          $oob();
        }
        _tmp$2 = _p$4 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _tmp = _p$3;
  }
  return _M0MPC15array10FixedArray21clamped__view_2einnerGkE(_tmp, self.start, self.end);
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0MPC16string10StringView4iter(self) {
  const start = self.start;
  const end = self.end;
  const index = new _M0TPB8MutLocalGiE(start);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < end) {
      const c1 = self.str.charCodeAt(index.val);
      if (c1 >= 55296 && c1 <= 56319 && (index.val + 1 | 0) < self.end) {
        const c2 = self.str.charCodeAt(index.val + 1 | 0);
        if (c2 >= 56320 && c2 <= 57343) {
          index.val = index.val + 2 | 0;
          return _M0FPB32code__point__of__surrogate__pair(c1, c2);
        }
      }
      index.val = index.val + 1 | 0;
      return c1;
    } else {
      return -1;
    }
  }, undefined);
}
function _M0MPC16string6String20unsafe__range__equal(self, self_off, other, other_off, len) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      const _p = self.charCodeAt(self_off + i | 0);
      const _p$2 = other.charCodeAt(other_off + i | 0);
      if (_p === _p$2) {
      } else {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0IPC16string10StringViewPB2Eq5equal(self, other) {
  const len = self.end - self.start | 0;
  if (len === (other.end - other.start | 0)) {
    if (self.str === other.str && self.start === other.start) {
      return true;
    }
    return _M0MPC16string6String20unsafe__range__equal(self.str, self.start, other.str, other.start, len);
  } else {
    return false;
  }
}
function _M0MPC16string6String11from__array(chars) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(Math.imul(chars.end - chars.start | 0, 4) | 0);
  const _bind = chars.end - chars.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const c = chars.buf[chars.start + _ | 0];
      _M0IPB13StringBuilderPB6Logger11write__char(buf, c);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return buf.val;
}
function _M0MPC16string6String19exact__view_2einner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    if (start < len) {
      const _p = self.charCodeAt(start);
      if (!(_p >= 56320 && _p <= 57343)) {
      } else {
        $panic();
      }
    }
    if (end$2 < len) {
      const _p = self.charCodeAt(end$2);
      if (!(_p >= 56320 && _p <= 57343)) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self, start, end$2);
  } else {
    return $panic();
  }
}
function _M0MPC16string6String24char__length__ge_2einner(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (c1 >= 55296 && c1 <= 56319 && (index + 1 | 0) < end_offset$2) {
        const c2 = self.charCodeAt(index + 1 | 0);
        if (c2 >= 56320 && c2 <= 57343) {
          _tmp = index + 2 | 0;
          _tmp$2 = count + 1 | 0;
          continue;
        } else {
          $panic();
        }
      }
      _tmp = index + 1 | 0;
      _tmp$2 = count + 1 | 0;
      continue;
    } else {
      return count >= len;
    }
  }
}
function _M0MPC16string6String31offset__of__nth__char__backward(self, n, start_offset, end_offset) {
  let _tmp = end_offset;
  let _tmp$2 = 0;
  while (true) {
    const utf16_offset = _tmp;
    const char_count = _tmp$2;
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const c = self.charCodeAt(utf16_offset - 1 | 0);
      if (c >= 56320 && c <= 57343) {
        _tmp = utf16_offset - 2 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      } else {
        _tmp = utf16_offset - 1 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      }
    } else {
      return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
    }
  }
}
function _M0MPC16string6String30offset__of__nth__char__forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let _tmp = start_offset;
    let _tmp$2 = 0;
    while (true) {
      const utf16_offset = _tmp;
      const char_count = _tmp$2;
      if (utf16_offset < end_offset && char_count < n) {
        const c = self.charCodeAt(utf16_offset);
        if (c >= 55296 && c <= 56319) {
          _tmp = utf16_offset + 2 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        } else {
          _tmp = utf16_offset + 1 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        }
      } else {
        return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
      }
    }
  } else {
    return $panic();
  }
}
function _M0MPC16string6String29offset__of__nth__char_2einner(self, i, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return i >= 0 ? _M0MPC16string6String30offset__of__nth__char__forward(self, i, start_offset, end_offset$2) : _M0MPC16string6String31offset__of__nth__char__backward(self, -i | 0, start_offset, end_offset$2);
}
function _M0MPC16string6String12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  if (start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length)) {
    return new _M0TPC16string10StringView(self, start_offset, end_offset$2);
  } else {
    return $panic();
  }
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
}
function _M0FPB19kmp__failure__table(pattern) {
  const m = pattern.end - pattern.start | 0;
  const table = $make_array_len_and_init(m, 0);
  let k = 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < m) {
      const c = pattern.str.charCodeAt(pattern.start + i | 0);
      while (true) {
        let _tmp$2;
        if (k > 0) {
          const _p = pattern.str.charCodeAt(pattern.start + k | 0);
          _tmp$2 = c !== _p;
        } else {
          _tmp$2 = false;
        }
        if (_tmp$2) {
          const _tmp$3 = k - 1 | 0;
          k = _tmp$3 >>> 0 < table.length ? table[_tmp$3] : $oob();
          continue;
        } else {
          break;
        }
      }
      const _p = pattern.str.charCodeAt(pattern.start + k | 0);
      if (c === _p) {
        k = k + 1 | 0;
      }
      if (i >>> 0 < table.length) {
        table[i] = k;
      } else {
        $oob();
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return table;
}
function _M0FPB24find__pattern__kmp__from(target, pattern, start) {
  const n = target.end - target.start | 0;
  const m = pattern.end - pattern.start | 0;
  const table = _M0FPB19kmp__failure__table(pattern);
  let k = 0;
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < n) {
      const c = target.str.charCodeAt(target.start + i | 0);
      while (true) {
        let _tmp$2;
        if (k > 0) {
          const _p = pattern.str.charCodeAt(pattern.start + k | 0);
          _tmp$2 = c !== _p;
        } else {
          _tmp$2 = false;
        }
        if (_tmp$2) {
          const _tmp$3 = k - 1 | 0;
          k = _tmp$3 >>> 0 < table.length ? table[_tmp$3] : $oob();
          continue;
        } else {
          break;
        }
      }
      const _p = pattern.str.charCodeAt(pattern.start + k | 0);
      if (c === _p) {
        k = k + 1 | 0;
      }
      if (k === m) {
        return (i - m | 0) + 1 | 0;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < candidate_end) {
      let _tmp$2;
      const _p = data.charCodeAt(pos);
      if (_p === first) {
        const _p$2 = data.charCodeAt(pos + last_offset | 0);
        _tmp$2 = _p$2 === last;
      } else {
        _tmp$2 = false;
      }
      if (_tmp$2) {
        return pos;
      }
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB42find__two__anchor__candidate__from__string(data, start, candidate_end, first, last_offset, last) {
  return _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last);
}
function _M0FPB21string__ranges__equal(left, left_start, right, right_start, length) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < length) {
      const _p = left.charCodeAt(left_start + i | 0);
      const _p$2 = right.charCodeAt(right_start + i | 0);
      if (_p !== _p$2) {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0FPB22find__by__two__anchors(target, pattern) {
  const target_len = target.end - target.start | 0;
  const pattern_len = pattern.end - pattern.start | 0;
  const target_start = target.start;
  const pattern_start = pattern.start;
  const last_offset = pattern_len - 1 | 0;
  const candidate_end = ((target_start + target_len | 0) - pattern_len | 0) + 1 | 0;
  const first = pattern.str.charCodeAt(pattern.start);
  const last = pattern.str.charCodeAt(pattern.start + last_offset | 0);
  const middle_len = last_offset - 1 | 0;
  let _tmp = target_start;
  let _tmp$2 = 0;
  while (true) {
    const pos = _tmp;
    const failures = _tmp$2;
    if (pos < candidate_end) {
      const found = _M0FPB42find__two__anchor__candidate__from__string(target.str, pos, candidate_end, first, last_offset, last);
      if (found < 0) {
        return undefined;
      }
      if (_M0FPB21string__ranges__equal(target.str, found + 1 | 0, pattern.str, pattern_start + 1 | 0, middle_len)) {
        return found - target_start | 0;
      }
      const failures$2 = failures + 1 | 0;
      const scanned = found - target_start | 0;
      if (failures$2 > 64 || failures$2 > (4 + (scanned / 8 | 0) | 0)) {
        return _M0FPB24find__pattern__kmp__from(target, pattern, scanned + 1 | 0);
      }
      _tmp = found + 1 | 0;
      _tmp$2 = failures$2;
      continue;
    } else {
      return undefined;
    }
  }
}
function _M0FPB24find__code__unit__scalar(data, start, end, code) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < end) {
      const _p = data.charCodeAt(pos);
      if (_p === code) {
        return pos;
      }
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB30find__code__unit__from__string(data, start, end, code) {
  return _M0FPB24find__code__unit__scalar(data, start, end, code);
}
function _M0FPB28find__code__unit__from__view(target, start, end, code) {
  const target_start = target.start;
  const found = _M0FPB30find__code__unit__from__string(target.str, target_start + start | 0, target_start + end | 0, code);
  return found < 0 ? -1 : found - target_start | 0;
}
function _M0MPC16string10StringView4find(self, str) {
  const pattern_len = str.end - str.start | 0;
  switch (pattern_len) {
    case 0: {
      return _M0MPC16string10StringView4findN6constrS348;
    }
    case 1: {
      const found = _M0FPB28find__code__unit__from__view(self, 0, self.end - self.start | 0, str.str.charCodeAt(str.start));
      return found < 0 ? undefined : found;
    }
    default: {
      return pattern_len > (self.end - self.start | 0) ? undefined : _M0FPB22find__by__two__anchors(self, str);
    }
  }
}
function _M0MPC16string6String4find(self, str) {
  return _M0MPC16string10StringView4find(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC16string6String6repeat(self, n) {
  if (n < 0) {
    return $panic();
  } else {
    if (n === 0) {
      return "";
    } else {
      if (n === 1) {
        return self;
      } else {
        const len = self.length;
        const total = Math.imul(len, n) | 0;
        if (len === 0 || (total / n | 0) === len) {
          const buf = _M0MPB13StringBuilder21StringBuilder_2einner(total);
          const str = self;
          let _tmp = 0;
          while (true) {
            const _ = _tmp;
            if (_ < n) {
              _M0IPB13StringBuilderPB6Logger13write__string(buf, str);
              _tmp = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          return buf.val;
        } else {
          return $panic();
        }
      }
    }
  }
}
function _M0MPC16string6String8find__by(self, pred) {
  const _p = new _M0TPC16string10StringView(self, 0, self.length);
  const _p$2 = _p.str;
  const _p$3 = _p.start;
  const _p$4 = _p.end;
  let _tmp = _p$3;
  let _tmp$2 = 0;
  while (true) {
    const _p$5 = _tmp;
    const _p$6 = _tmp$2;
    if (_p$5 < _p$4) {
      let _p$7;
      let _p$8;
      _L: {
        const _p$9 = _p$2.charCodeAt(_p$5);
        if (_p$9 >= 55296 && _p$9 <= 56319 && (_p$5 + 1 | 0) < _p$4) {
          const _p$10 = _p$2.charCodeAt(_p$5 + 1 | 0);
          if (_p$10 >= 56320 && _p$10 <= 57343) {
            const _tmp$3 = _p$5 + 2 | 0;
            const _p$11 = (((Math.imul(_p$9 - 55296 | 0, 1024) | 0) + _p$10 | 0) - 56320 | 0) + 65536 | 0;
            _p$7 = _tmp$3;
            _p$8 = _p$11;
            break _L;
          } else {
            const _tmp$3 = _p$5 + 1 | 0;
            const _p$11 = _p$9;
            _p$7 = _tmp$3;
            _p$8 = _p$11;
            break _L;
          }
        } else {
          const _tmp$3 = _p$5 + 1 | 0;
          const _p$10 = _p$9;
          _p$7 = _tmp$3;
          _p$8 = _p$10;
          break _L;
        }
      }
      if (pred(_p$8)) {
        return _p$6;
      }
      _tmp = _p$7;
      const _p$9 = _p$8;
      _tmp$2 = _p$6 + (_p$9 <= 65535 ? 1 : 2) | 0;
      continue;
    } else {
      return undefined;
    }
  }
}
function _M0MPC16string10StringView11has__suffix(self, str) {
  const self_len = self.end - self.start | 0;
  const str_len = str.end - str.start | 0;
  if (str_len <= self_len) {
    const start = self_len - str_len | 0;
    let _tmp;
    if (str_len === 0) {
      _tmp = true;
    } else {
      const _p = self.str.charCodeAt(self.start + start | 0);
      const _p$2 = str.str.charCodeAt(str.start);
      _tmp = _p === _p$2;
    }
    if (_tmp) {
      return _M0MPC16string6String20unsafe__range__equal(self.str, self.start + start | 0, str.str, str.start, str_len);
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function _M0MPC16string6String11has__suffix(self, str) {
  return _M0MPC16string10StringView11has__suffix(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC16string10StringView11has__prefix(self, str) {
  const str_len = str.end - str.start | 0;
  if (str_len <= (self.end - self.start | 0)) {
    let _tmp;
    if (str_len === 0) {
      _tmp = true;
    } else {
      const _p = self.str.charCodeAt(self.start);
      const _p$2 = str.str.charCodeAt(str.start);
      _tmp = _p === _p$2;
    }
    if (_tmp) {
      return _M0MPC16string6String20unsafe__range__equal(self.str, self.start, str.str, str.start, str_len);
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function _M0MPC16string6String11has__prefix(self, str) {
  return _M0MPC16string10StringView11has__prefix(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC15array5Array4pushGsE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGcE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGiE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGbE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0FPB36string__contains__code__unit__scalar(str, start, end, code) {
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < end) {
      const _p = str.charCodeAt(i);
      if (_p === code) {
        return true;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FPB28string__contains__code__unit(str, start, end, code) {
  return _M0FPB36string__contains__code__unit__scalar(str, start, end, code);
}
function _M0MPC16string10StringView20contains__code__unit(self, code) {
  return _M0FPB28string__contains__code__unit(self.str, self.start, self.end, code);
}
function _M0MPC16string10StringView8contains(self, str) {
  const _bind = str.end - str.start | 0;
  switch (_bind) {
    case 0: {
      return true;
    }
    case 1: {
      return _M0MPC16string10StringView20contains__code__unit(self, str.str.charCodeAt(str.start));
    }
    default: {
      const _bind$2 = _M0MPC16string10StringView4find(self, str);
      return !(_bind$2 === undefined);
    }
  }
}
function _M0MPC16string6String8contains(self, str) {
  return _M0MPC16string10StringView8contains(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPB4Iter3mapGcRPC16string10StringViewE(self, f) {
  return new _M0TPB4IterGRPC16string10StringViewE(() => {
    const _bind = _M0MPB4Iter4nextGcE(self);
    if (_bind === -1) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0MPB4Iter3mapGRPC16string10StringViewsE(self, f) {
  return new _M0TPB4IterGsE(() => {
    const _bind = _M0MPB4Iter4nextGRPC16string10StringViewE(self);
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0IPC14char4CharPB4Show10to__string(self) {
  return String.fromCodePoint(self);
}
function _M0MPC16string10StringView5split(self, sep) {
  const sep_len = sep.end - sep.start | 0;
  if (sep_len === 0) {
    return _M0MPB4Iter3mapGcRPC16string10StringViewE(_M0MPC16string10StringView4iter(self), (c) => _M0MPC16string6String12view_2einner(_M0IPC14char4CharPB4Show10to__string(c), 0, undefined));
  }
  const remaining = new _M0TPB8MutLocalGORPC16string10StringViewE(self);
  return _M0MPB4Iter3newGRPC16string10StringViewE(() => {
    const _bind = remaining.val;
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _view = _Some;
      const _bind$2 = _M0MPC16string10StringView4find(_view, sep);
      if (_bind$2 === undefined) {
        remaining.val = undefined;
        return _view;
      } else {
        const _Some$2 = _bind$2;
        const _end = _Some$2;
        remaining.val = _M0MPC16string10StringView12view_2einner(_view, _end + sep_len | 0, undefined);
        return _M0MPC16string10StringView12view_2einner(_view, 0, _end);
      }
    }
  }, undefined);
}
function _M0MPC16string6String5split(self, sep) {
  return _M0MPC16string10StringView5split(new _M0TPC16string10StringView(self, 0, self.length), sep);
}
function _M0MPB4Iter9to__arrayGRPC16string10StringViewE(self) {
  const _bind = self.size_hint;
  let result;
  if (_bind === undefined) {
    result = [];
  } else {
    result = [];
  }
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGRPC16string10StringViewE(self);
    if (_bind$2 === undefined) {
      break;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      _M0MPC15array5Array4pushGsE(result, _x);
      continue;
    }
  }
  return result;
}
function _M0MPC16string6String12replace__all(self, old, new_) {
  const len = self.length;
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(len);
  const old_len = old.end - old.start | 0;
  const new$2 = _M0MPC16string10StringView9to__owned(new_);
  if (old_len === 0) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, new$2);
    const _bind = self.length;
    let _tmp = 0;
    while (true) {
      const _string_index = _tmp;
      if (_string_index < _bind) {
        let _decoded_next_string_index;
        let _decoded_char;
        _L: {
          const _bind$2 = self.charCodeAt(_string_index);
          if (_bind$2 >= 55296 && _bind$2 <= 56319 && (_string_index + 1 | 0) < _bind) {
            const _bind$3 = self.charCodeAt(_string_index + 1 | 0);
            if (_bind$3 >= 56320 && _bind$3 <= 57343) {
              const _tmp$2 = _string_index + 2 | 0;
              const _p = (((Math.imul(_bind$2 - 55296 | 0, 1024) | 0) + _bind$3 | 0) - 56320 | 0) + 65536 | 0;
              _decoded_next_string_index = _tmp$2;
              _decoded_char = _p;
              break _L;
            } else {
              const _tmp$2 = _string_index + 1 | 0;
              const _p = _bind$2;
              _decoded_next_string_index = _tmp$2;
              _decoded_char = _p;
              break _L;
            }
          } else {
            const _tmp$2 = _string_index + 1 | 0;
            const _p = _bind$2;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          }
        }
        _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
        _M0IPB13StringBuilderPB6Logger13write__string(buf, new$2);
        _tmp = _decoded_next_string_index;
        continue;
      } else {
        break;
      }
    }
    return buf.val;
  } else {
    const first_end = _M0MPC16string6String4find(self, old);
    if (first_end === undefined) {
      return self;
    } else {
      const _Some = first_end;
      const _end = _Some;
      let _tmp = new _M0TPC16string10StringView(self, 0, self.length);
      let _tmp$2 = _end;
      while (true) {
        const view = _tmp;
        const end = _tmp$2;
        const seg = _M0MPC16string10StringView12view_2einner(view, 0, end);
        _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, seg.str, seg.start, seg.end - seg.start | 0);
        _M0IPB13StringBuilderPB6Logger13write__string(buf, new$2);
        if ((end + old_len | 0) <= len) {
          const next_view = _M0MPC16string10StringView12view_2einner(view, end + old_len | 0, undefined);
          const _bind = _M0MPC16string10StringView4find(next_view, old);
          if (_bind === undefined) {
            _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, next_view.str, next_view.start, next_view.end - next_view.start | 0);
            break;
          } else {
            const _Some$2 = _bind;
            const _next_end = _Some$2;
            _tmp = next_view;
            _tmp$2 = _next_end;
            continue;
          }
        } else {
          break;
        }
      }
      return buf.val;
    }
  }
}
function _M0MPC14char4Char20is__ascii__uppercase(self) {
  return self >= 65 && self <= 90;
}
function _M0MPC16string6String9to__lower(self) {
  const _bind = _M0MPC16string6String8find__by(self, (c) => _M0MPC14char4Char20is__ascii__uppercase(c));
  if (_bind === undefined) {
    return self;
  } else {
    const _Some = _bind;
    const _idx = _Some;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(self.length);
    const head = _M0MPC16string6String12view_2einner(self, 0, _idx);
    _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, head.str, head.start, head.end - head.start | 0);
    const _bind$2 = _M0MPC16string6String12view_2einner(self, _idx, undefined);
    const _bind$3 = _bind$2.str;
    const _bind$4 = _bind$2.start;
    const _bind$5 = _bind$2.end;
    let _tmp = _bind$4;
    while (true) {
      const _string_index = _tmp;
      if (_string_index < _bind$5) {
        let _decoded_next_string_index;
        let _decoded_char;
        _L: {
          const _bind$6 = _bind$3.charCodeAt(_string_index);
          if (_bind$6 >= 55296 && _bind$6 <= 56319 && (_string_index + 1 | 0) < _bind$5) {
            const _bind$7 = _bind$3.charCodeAt(_string_index + 1 | 0);
            if (_bind$7 >= 56320 && _bind$7 <= 57343) {
              const _tmp$2 = _string_index + 2 | 0;
              const _p = (((Math.imul(_bind$6 - 55296 | 0, 1024) | 0) + _bind$7 | 0) - 56320 | 0) + 65536 | 0;
              _decoded_next_string_index = _tmp$2;
              _decoded_char = _p;
              break _L;
            } else {
              const _tmp$2 = _string_index + 1 | 0;
              const _p = _bind$6;
              _decoded_next_string_index = _tmp$2;
              _decoded_char = _p;
              break _L;
            }
          } else {
            const _tmp$2 = _string_index + 1 | 0;
            const _p = _bind$6;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          }
        }
        if (_M0MPC14char4Char20is__ascii__uppercase(_decoded_char)) {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char + 32 | 0);
        } else {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
        }
        _tmp = _decoded_next_string_index;
        continue;
      } else {
        break;
      }
    }
    return buf.val;
  }
}
function _M0MPC16string10StringView9get__char(self, idx) {
  if (idx >= 0 && idx < (self.end - self.start | 0)) {
    const c = self.str.charCodeAt(self.start + idx | 0);
    if (c >= 55296 && c <= 56319) {
      if ((idx + 1 | 0) < (self.end - self.start | 0)) {
        const next = self.str.charCodeAt(self.start + (idx + 1 | 0) | 0);
        return next >= 56320 && next <= 57343 ? _M0FPB32code__point__of__surrogate__pair(c, next) : -1;
      } else {
        return -1;
      }
    } else {
      return c >= 56320 && c <= 57343 ? -1 : c;
    }
  } else {
    return -1;
  }
}
function _M0IPC16string6StringPB12ToStringView16to__string__view(self) {
  return new _M0TPC16string10StringView(self, 0, self.length);
}
function _M0IPC16string6StringPB7Compare7compare(self, other) {
  const len = self.length;
  const _bind = $compare_int(len, other.length);
  if (_bind === 0) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const x = self.charCodeAt(i);
        const y = other.charCodeAt(i);
        if (x !== y) {
          return x < y ? -1 : 1;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return 0;
  } else {
    return _bind;
  }
}
function _M0MPC16string6String9to__array(self) {
  const chars = [];
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$2 = self.charCodeAt(_string_index);
        if (_bind$2 >= 55296 && _bind$2 <= 56319 && (_string_index + 1 | 0) < _bind) {
          const _bind$3 = self.charCodeAt(_string_index + 1 | 0);
          if (_bind$3 >= 56320 && _bind$3 <= 57343) {
            const _tmp$2 = _string_index + 2 | 0;
            const _p = (((Math.imul(_bind$2 - 55296 | 0, 1024) | 0) + _bind$3 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          } else {
            const _tmp$2 = _string_index + 1 | 0;
            const _p = _bind$2;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          }
        } else {
          const _tmp$2 = _string_index + 1 | 0;
          const _p = _bind$2;
          _decoded_next_string_index = _tmp$2;
          _decoded_char = _p;
          break _L;
        }
      }
      _M0MPC15array5Array4pushGcE(chars, _decoded_char);
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return chars;
}
function _M0IPC13int3IntPB4Show10to__string(self) {
  return _M0MPC13int3Int18to__string_2einner(self, 10);
}
function _M0MPC16result6Result6unwrapGRP28BeiLaDuo12cidr_2daudit9CidrBlocksE(self) {
  if (self.$tag === 1) {
    const _Ok = self;
    return _Ok._0;
  } else {
    return $panic();
  }
}
function _M0MPC15array9ArrayView21clamped__view_2einnerGkE(self, start, end) {
  const len = self.end - self.start | 0;
  const lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _end = _Some;
    hi = _end < 0 ? 0 : _end > len ? len : _end;
  }
  const count = hi > lo ? hi - lo | 0 : 0;
  const _bind = self.buf;
  const _bind$2 = self.start + lo | 0;
  return new _M0TPB9ArrayViewGkE(_bind, _bind$2, _bind$2 + count | 0);
}
function _M0MPC15array9ArrayView4joinGsE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string6StringPB12ToStringView16to__string__view(_hd);
    const _bind = _x_end - _x_start | 0;
    let size_hint;
    let _tmp = 0;
    let _tmp$2 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp;
      const size_hint$2 = _tmp$2;
      if (_ < _bind) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp = _ + 1 | 0;
        const _bind$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
        _tmp$2 = (size_hint$2 + (_bind$2.end - _bind$2.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
        continue;
      } else {
        size_hint = size_hint$2;
        break;
      }
    }
    const size_hint$2 = size_hint << 1;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint$2);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if ((separator.end - separator.start | 0) === 0) {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return buf.val;
  }
}
function _M0MPC16option6Option10unwrap__orGsE(self, default_) {
  if (self === undefined) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC16option6Option10unwrap__orGcE(self, default_) {
  if (self === -1) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC16option6Option3mapGRP38BeiLaDuo12cidr_2daudit5nginx13AccessContextsE(self, f) {
  if (self === undefined) {
    return undefined;
  } else {
    const _Some = self;
    const _t = _Some;
    return f(_t);
  }
}
function _M0MPC16option6Option3mapGRPC16string10StringViewsE(self, f) {
  if (self === undefined) {
    return undefined;
  } else {
    const _Some = self;
    const _t = _Some;
    return f(_t);
  }
}
function _M0MPC13int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0FPB8new__mapGsRPB5ArrayGsEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsRPB5ArrayGsEE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB8new__mapGsRPB4JsonE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsRPB4JsonE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB21capacity__for__length(length) {
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  return capacity;
}
function _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGsEE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    const _p = _bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob();
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    const _p = _bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob();
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGsRPB5ArrayGsEE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGsRPB4JsonE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10push__awayGsRPB5ArrayGsEE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRPB5ArrayGsEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRPB5ArrayGsEE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRPB4JsonE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRPB4JsonE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsRPB5ArrayGsEE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGsEE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsRPB5ArrayGsEE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGsEE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsRPB4JsonE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map4growGsRPB5ArrayGsEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsRPB5ArrayGsEE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGsRPB4JsonE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsRPB4JsonE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB5ArrayGsEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB5ArrayGsEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRPB5ArrayGsEE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGsEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB5ArrayGsEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB5ArrayGsEE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRPB5ArrayGsEE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGsEE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB4JsonE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB4JsonE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRPB4JsonE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB4JsonE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRPB4JsonE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3setGsRPB5ArrayGsEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB5ArrayGsEE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRPB4JsonE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB4JsonE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3MapGsRPB5ArrayGsEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRPB5ArrayGsEE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB5ArrayGsEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRPB4JsonE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB4JsonE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3getGsRPB4JsonE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRPB5ArrayGsEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return _M0DTPC16option6OptionGRPB5ArrayGsEE4None__;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(_entry.value);
      }
      if (i > _entry.psl) {
        return _M0DTPC16option6OptionGRPB5ArrayGsEE4None__;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map4iterGsRPB4JsonE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsRPB4JsonEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGRPC16string10StringViewE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind = curr_entry.val;
        if (_bind === undefined) {
          break _L;
        } else {
          const _Some = _bind;
          const _x = _Some;
          const _key = _x.key;
          const _value = _x.value;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return { _0: _key, _1: _value };
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0MPC14json4Json4JsonGsE(value) {
  return new _M0DTPB4Json6String(value);
}
function _M0MPC14json4Json4JsonGiE(value) {
  return _M0IPC13int3IntPB6ToJson8to__json(value);
}
function _M0MPC14json4Json4JsonGRPB5ArrayGsEE(value) {
  return _M0IPC15array5ArrayPB6ToJson8to__jsonGsE(value);
}
function _M0MPC14json4Json4JsonGbE(value) {
  return _M0IPC14bool4BoolPB6ToJson8to__json(value);
}
function _M0IPC14bool4BoolPB6ToJson8to__json(self) {
  if (self) {
    const _p = true;
    return _p ? _M0DTPB4Json4True__ : _M0DTPB4Json5False__;
  } else {
    const _p = false;
    return _p ? _M0DTPB4Json4True__ : _M0DTPB4Json5False__;
  }
}
function _M0IPC13int3IntPB6ToJson8to__json(self) {
  const _p = self + 0;
  const _p$2 = undefined;
  return new _M0DTPB4Json6Number(_p, _p$2);
}
function _M0IPC15array5ArrayPB6ToJson8to__jsonGsE(self) {
  const _p = new Array(self.length);
  const _p$2 = self.length;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = self[_p$3];
      _p[_p$3] = new _M0DTPB4Json6String(_p$4);
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPB4Json5Array(_p);
}
function _M0IPC16string6StringPB4Hash4hash(self) {
  let acc = (_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0;
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      acc = (acc >>> 0) + (4 >>> 0) | 0;
      const v = self.charCodeAt(i);
      acc = _M0FPB13consume4__acc(acc, v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FPB13finalize__acc(acc);
}
function _M0IPC16double6DoublePB4Show10to__string(self) {
  return String(self);
}
function _M0MPC15array5Array21clamped__view_2einnerGcE(self, start, end) {
  const len = self.length;
  const lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _end = _Some;
    hi = _end < 0 ? 0 : _end > len ? len : _end;
  }
  const count = hi > lo ? hi - lo | 0 : 0;
  const _bind = self;
  return new _M0TPB9ArrayViewGcE(_bind, lo, lo + count | 0);
}
function _M0MPC15array5Array11unsafe__popGsE(self) {
  return _M0MPB7JSArray3pop(self);
}
function _M0MPC15array5Array3popGsE(self) {
  if (self.length === 0) {
    return undefined;
  } else {
    const v = _M0MPC15array5Array11unsafe__popGsE(self);
    return v;
  }
}
function _M0MPC15array5Array4copyGRP38BeiLaDuo12cidr_2daudit5nginx10AccessRuleE(self) {
  return _M0MPB7JSArray4copy(self);
}
function _M0MPC15array5Array2atGsE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGcE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGiE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGbE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array12MutArrayView4swapGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr, i, j) {
  const temp = arr.buf[arr.start + i | 0];
  arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
  arr.buf[arr.start + j | 0] = temp;
}
function _M0MPC15array12MutArrayView5sliceGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr, start, end) {
  const _bind = arr.end - arr.start | 0;
  if (start < 0 || (start > end || end > _bind)) {
    $panic();
  }
  return new _M0TPB12MutArrayViewGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr.buf, start + arr.start | 0, end + arr.start | 0);
}
function _M0MPC15array12MutArrayView14rev__in__placeGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr) {
  const len = arr.end - arr.start | 0;
  const mid_len = len / 2 | 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < mid_len) {
      const j = (len - i | 0) - 1 | 0;
      const temp = arr.buf[arr.start + i | 0];
      arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
      arr.buf[arr.start + j | 0] = temp;
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB17fixed__get__limit(len) {
  let _tmp = len;
  let _tmp$2 = 0;
  while (true) {
    const len$2 = _tmp;
    const limit = _tmp$2;
    if (len$2 > 0) {
      _tmp = len$2 / 2 | 0;
      _tmp$2 = limit + 1 | 0;
      continue;
    } else {
      return limit;
    }
  }
}
function _M0FPB19fixed__bubble__sortGsE(arr) {
  const _bind = arr.end - arr.start | 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && _M0IP016_24default__implPB7Compare6op__gtGsE(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0])) {
          _M0MPC15array12MutArrayView4swapGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr, j, j - 1 | 0);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB20fixed__choose__pivotN7sort__2S991GsE(_env, a, b) {
  const arr = _env._1;
  const swaps = _env._0;
  if (_M0IP016_24default__implPB7Compare6op__gtGsE(arr.buf[arr.start + a | 0], arr.buf[arr.start + b | 0])) {
    _M0MPC15array12MutArrayView4swapGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0FPB20fixed__choose__pivotN7sort__3S992GsE(_env, a, b, c) {
  _M0FPB20fixed__choose__pivotN7sort__2S991GsE(_env, a, b);
  _M0FPB20fixed__choose__pivotN7sort__2S991GsE(_env, b, c);
  _M0FPB20fixed__choose__pivotN7sort__2S991GsE(_env, a, b);
}
function _M0FPB20fixed__choose__pivotGsE(arr) {
  const len = arr.end - arr.start | 0;
  const swaps = new _M0TPB8MutLocalGiE(0);
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    const a = Math.imul(len / 4 | 0, 1) | 0;
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: swaps, _1: arr };
    if (len > 50) {
      _M0FPB20fixed__choose__pivotN7sort__3S992GsE(_env, a - 1 | 0, a, a + 1 | 0);
      _M0FPB20fixed__choose__pivotN7sort__3S992GsE(_env, b - 1 | 0, b, b + 1 | 0);
      _M0FPB20fixed__choose__pivotN7sort__3S992GsE(_env, c - 1 | 0, c, c + 1 | 0);
    }
    _M0FPB20fixed__choose__pivotN7sort__3S992GsE(_env, a, b, c);
  }
  if (swaps.val === 12) {
    _M0MPC15array12MutArrayView14rev__in__placeGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function _M0FPB17fixed__sift__downGsE(arr, index) {
  const len = arr.end - arr.start | 0;
  let _tmp = index;
  let _tmp$2 = (Math.imul(index, 2) | 0) + 1 | 0;
  while (true) {
    const index$2 = _tmp;
    const child = _tmp$2;
    if (child < len) {
      const child$2 = (child + 1 | 0) < len && _M0IP016_24default__implPB7Compare6op__ltGsE(arr.buf[arr.start + child | 0], arr.buf[arr.start + (child + 1 | 0) | 0]) ? child + 1 | 0 : child;
      if (_M0IP016_24default__implPB7Compare6op__geGsE(arr.buf[arr.start + index$2 | 0], arr.buf[arr.start + child$2 | 0])) {
        return undefined;
      }
      _M0MPC15array12MutArrayView4swapGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr, index$2, child$2);
      _tmp = child$2;
      _tmp$2 = (Math.imul(child$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB17fixed__heap__sortGsE(arr) {
  const len = arr.end - arr.start | 0;
  const _bind = len / 2 | 0;
  let _tmp = _bind - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      _M0FPB17fixed__sift__downGsE(arr, i);
      _tmp = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2 = len - 1 | 0;
  while (true) {
    const i = _tmp$2;
    if (i >= 1) {
      _M0MPC15array12MutArrayView4swapGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr, 0, i);
      _M0FPB17fixed__sift__downGsE(_M0MPC15array12MutArrayView5sliceGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr, 0, i), 0);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB16fixed__partitionGsE(arr, pivot_index) {
  _M0MPC15array12MutArrayView4swapGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr, pivot_index, (arr.end - arr.start | 0) - 1 | 0);
  const pivot = arr.buf[arr.start + ((arr.end - arr.start | 0) - 1 | 0) | 0];
  const _bind = (arr.end - arr.start | 0) - 1 | 0;
  let _tmp = 0;
  let _tmp$2 = 0;
  let _tmp$3 = true;
  while (true) {
    const j = _tmp;
    const i = _tmp$2;
    const partitioned = _tmp$3;
    if (j < _bind) {
      if (_M0IP016_24default__implPB7Compare6op__ltGsE(arr.buf[arr.start + j | 0], pivot)) {
        if (i !== j) {
          _M0MPC15array12MutArrayView4swapGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr, i, j);
          _tmp = j + 1 | 0;
          _tmp$2 = i + 1 | 0;
          _tmp$3 = false;
          continue;
        } else {
          _tmp = j + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue;
        }
      } else {
        _tmp = j + 1 | 0;
        continue;
      }
    } else {
      _M0MPC15array12MutArrayView4swapGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr, i, (arr.end - arr.start | 0) - 1 | 0);
      return { _0: i, _1: partitioned };
    }
  }
}
function _M0FPB24fixed__try__bubble__sortGsE(arr) {
  const _bind = arr.end - arr.start | 0;
  let _tmp = 1;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp;
    const tries = _tmp$2;
    if (i < _bind) {
      let sorted;
      let _tmp$3 = i;
      let _tmp$4 = true;
      while (true) {
        const j = _tmp$3;
        const sorted$2 = _tmp$4;
        if (j > 0 && _M0IP016_24default__implPB7Compare6op__gtGsE(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0])) {
          _M0MPC15array12MutArrayView4swapGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr, j, j - 1 | 0);
          _tmp$3 = j - 1 | 0;
          _tmp$4 = false;
          continue;
        } else {
          sorted = sorted$2;
          break;
        }
      }
      if (!sorted) {
        const tries$2 = tries + 1 | 0;
        if (tries$2 > 8) {
          return false;
        }
        _tmp = i + 1 | 0;
        _tmp$2 = tries$2;
        continue;
      } else {
        _tmp = i + 1 | 0;
        continue;
      }
    } else {
      return true;
    }
  }
}
function _M0FPB18fixed__quick__sortGsE(arr, pred, limit) {
  let _tmp = limit;
  let _tmp$2 = arr;
  let _tmp$3 = pred;
  let _tmp$4 = true;
  let _tmp$5 = true;
  while (true) {
    const limit$2 = _tmp;
    const arr$2 = _tmp$2;
    const pred$2 = _tmp$3;
    const was_partitioned = _tmp$4;
    const balanced = _tmp$5;
    const len = arr$2.end - arr$2.start | 0;
    if (len <= 16) {
      if (len >= 2) {
        _M0FPB19fixed__bubble__sortGsE(arr$2);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      _M0FPB17fixed__heap__sortGsE(arr$2);
      return undefined;
    }
    const _bind = _M0FPB20fixed__choose__pivotGsE(arr$2);
    const _pivot_index = _bind._0;
    const _likely_sorted = _bind._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (_M0FPB24fixed__try__bubble__sortGsE(arr$2)) {
        return undefined;
      }
    }
    const _bind$2 = _M0FPB16fixed__partitionGsE(arr$2, _pivot_index);
    const _pivot = _bind$2._0;
    const _partitioned = _bind$2._1;
    const _p = len - _pivot | 0;
    const balanced$2 = (_pivot > _p ? _p : _pivot) >= (len / 8 | 0);
    const limit$3 = !balanced$2 ? limit$2 - 1 | 0 : limit$2;
    if (pred$2 === undefined) {
    } else {
      const _Some = pred$2;
      const _p$2 = _Some;
      if (_p$2 === arr$2.buf[arr$2.start + _pivot | 0]) {
        let i;
        let _tmp$6 = _pivot;
        while (true) {
          const i$2 = _tmp$6;
          if (i$2 < len && _p$2 === arr$2.buf[arr$2.start + i$2 | 0]) {
            _tmp$6 = i$2 + 1 | 0;
            continue;
          } else {
            i = i$2;
            break;
          }
        }
        _tmp = limit$3;
        _tmp$2 = _M0MPC15array12MutArrayView5sliceGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr$2, i, len);
        _tmp$4 = _partitioned;
        _tmp$5 = balanced$2;
        continue;
      }
    }
    const left = _M0MPC15array12MutArrayView5sliceGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr$2, 0, _pivot);
    const right = _M0MPC15array12MutArrayView5sliceGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr$2, _pivot + 1 | 0, len);
    if ((left.end - left.start | 0) < (right.end - right.start | 0)) {
      _M0FPB18fixed__quick__sortGsE(left, pred$2, limit$3);
      _tmp = limit$3;
      _tmp$2 = right;
      _tmp$3 = arr$2.buf[arr$2.start + _pivot | 0];
      _tmp$4 = _partitioned;
      _tmp$5 = balanced$2;
      continue;
    } else {
      _M0FPB18fixed__quick__sortGsE(right, arr$2.buf[arr$2.start + _pivot | 0], limit$3);
      _tmp = limit$3;
      _tmp$2 = left;
      _tmp$4 = _partitioned;
      _tmp$5 = balanced$2;
      continue;
    }
  }
}
function _M0MPC15array12MutArrayView4sortGsE(self) {
  _M0FPB18fixed__quick__sortGsE(self, undefined, _M0FPB17fixed__get__limit(self.end - self.start | 0));
}
function _M0FPB23fixed__bubble__sort__byGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr, cmp) {
  const _bind = arr.end - arr.start | 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && cmp(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0]) > 0) {
          _M0MPC15array12MutArrayView4swapGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr, j, j - 1 | 0);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB24fixed__choose__pivot__byN7sort__2S1074GRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(_env, a, b) {
  const arr = _env._2;
  const swaps = _env._1;
  const cmp = _env._0;
  if (cmp(arr.buf[arr.start + a | 0], arr.buf[arr.start + b | 0]) > 0) {
    _M0MPC15array12MutArrayView4swapGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0FPB24fixed__choose__pivot__byN7sort__3S1075GRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(_env, a, b, c) {
  _M0FPB24fixed__choose__pivot__byN7sort__2S1074GRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(_env, a, b);
  _M0FPB24fixed__choose__pivot__byN7sort__2S1074GRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(_env, b, c);
  _M0FPB24fixed__choose__pivot__byN7sort__2S1074GRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(_env, a, b);
}
function _M0FPB24fixed__choose__pivot__byGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr, cmp) {
  const len = arr.end - arr.start | 0;
  const swaps = new _M0TPB8MutLocalGiE(0);
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    const a = Math.imul(len / 4 | 0, 1) | 0;
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: cmp, _1: swaps, _2: arr };
    if (len > 50) {
      _M0FPB24fixed__choose__pivot__byN7sort__3S1075GRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(_env, a - 1 | 0, a, a + 1 | 0);
      _M0FPB24fixed__choose__pivot__byN7sort__3S1075GRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(_env, b - 1 | 0, b, b + 1 | 0);
      _M0FPB24fixed__choose__pivot__byN7sort__3S1075GRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(_env, c - 1 | 0, c, c + 1 | 0);
    }
    _M0FPB24fixed__choose__pivot__byN7sort__3S1075GRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(_env, a, b, c);
  }
  if (swaps.val === 12) {
    _M0MPC15array12MutArrayView14rev__in__placeGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function _M0FPB21fixed__sift__down__byGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr, index, cmp) {
  const len = arr.end - arr.start | 0;
  let _tmp = index;
  let _tmp$2 = (Math.imul(index, 2) | 0) + 1 | 0;
  while (true) {
    const index$2 = _tmp;
    const child = _tmp$2;
    if (child < len) {
      const child$2 = (child + 1 | 0) < len && cmp(arr.buf[arr.start + child | 0], arr.buf[arr.start + (child + 1 | 0) | 0]) < 0 ? child + 1 | 0 : child;
      if (cmp(arr.buf[arr.start + index$2 | 0], arr.buf[arr.start + child$2 | 0]) >= 0) {
        return undefined;
      }
      _M0MPC15array12MutArrayView4swapGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr, index$2, child$2);
      _tmp = child$2;
      _tmp$2 = (Math.imul(child$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB21fixed__heap__sort__byGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr, cmp) {
  const len = arr.end - arr.start | 0;
  const _bind = len / 2 | 0;
  let _tmp = _bind - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      _M0FPB21fixed__sift__down__byGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr, i, cmp);
      _tmp = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2 = len - 1 | 0;
  while (true) {
    const i = _tmp$2;
    if (i >= 1) {
      _M0MPC15array12MutArrayView4swapGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr, 0, i);
      _M0FPB21fixed__sift__down__byGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(_M0MPC15array12MutArrayView5sliceGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr, 0, i), 0, cmp);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB20fixed__partition__byGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr, cmp, pivot_index) {
  _M0MPC15array12MutArrayView4swapGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr, pivot_index, (arr.end - arr.start | 0) - 1 | 0);
  const pivot = arr.buf[arr.start + ((arr.end - arr.start | 0) - 1 | 0) | 0];
  const _bind = (arr.end - arr.start | 0) - 1 | 0;
  let _tmp = 0;
  let _tmp$2 = 0;
  let _tmp$3 = true;
  while (true) {
    const j = _tmp;
    const i = _tmp$2;
    const partitioned = _tmp$3;
    if (j < _bind) {
      if (cmp(arr.buf[arr.start + j | 0], pivot) < 0) {
        if (i !== j) {
          _M0MPC15array12MutArrayView4swapGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr, i, j);
          _tmp = j + 1 | 0;
          _tmp$2 = i + 1 | 0;
          _tmp$3 = false;
          continue;
        } else {
          _tmp = j + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue;
        }
      } else {
        _tmp = j + 1 | 0;
        continue;
      }
    } else {
      _M0MPC15array12MutArrayView4swapGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr, i, (arr.end - arr.start | 0) - 1 | 0);
      return { _0: i, _1: partitioned };
    }
  }
}
function _M0FPB28fixed__try__bubble__sort__byGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr, cmp) {
  const _bind = arr.end - arr.start | 0;
  let _tmp = 1;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp;
    const tries = _tmp$2;
    if (i < _bind) {
      let sorted;
      let _tmp$3 = i;
      let _tmp$4 = true;
      while (true) {
        const j = _tmp$3;
        const sorted$2 = _tmp$4;
        if (j > 0 && cmp(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0]) > 0) {
          _M0MPC15array12MutArrayView4swapGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr, j, j - 1 | 0);
          _tmp$3 = j - 1 | 0;
          _tmp$4 = false;
          continue;
        } else {
          sorted = sorted$2;
          break;
        }
      }
      if (!sorted) {
        const tries$2 = tries + 1 | 0;
        if (tries$2 > 8) {
          return false;
        }
        _tmp = i + 1 | 0;
        _tmp$2 = tries$2;
        continue;
      } else {
        _tmp = i + 1 | 0;
        continue;
      }
    } else {
      return true;
    }
  }
}
function _M0FPB22fixed__quick__sort__byGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr, cmp, pred, limit) {
  let _tmp = limit;
  let _tmp$2 = arr;
  let _tmp$3 = pred;
  let _tmp$4 = true;
  let _tmp$5 = true;
  while (true) {
    const limit$2 = _tmp;
    const arr$2 = _tmp$2;
    const pred$2 = _tmp$3;
    const was_partitioned = _tmp$4;
    const balanced = _tmp$5;
    const len = arr$2.end - arr$2.start | 0;
    if (len <= 16) {
      if (len >= 2) {
        _M0FPB23fixed__bubble__sort__byGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr$2, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      _M0FPB21fixed__heap__sort__byGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr$2, cmp);
      return undefined;
    }
    const _bind = _M0FPB24fixed__choose__pivot__byGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr$2, cmp);
    const _pivot_index = _bind._0;
    const _likely_sorted = _bind._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (_M0FPB28fixed__try__bubble__sort__byGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr$2, cmp)) {
        return undefined;
      }
    }
    const _bind$2 = _M0FPB20fixed__partition__byGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr$2, cmp, _pivot_index);
    const _pivot = _bind$2._0;
    const _partitioned = _bind$2._1;
    const _p = len - _pivot | 0;
    const balanced$2 = (_pivot > _p ? _p : _pivot) >= (len / 8 | 0);
    const limit$3 = !balanced$2 ? limit$2 - 1 | 0 : limit$2;
    if (pred$2 === undefined) {
    } else {
      const _Some = pred$2;
      const _p$2 = _Some;
      if (cmp(_p$2, arr$2.buf[arr$2.start + _pivot | 0]) === 0) {
        let i;
        let _tmp$6 = _pivot;
        while (true) {
          const i$2 = _tmp$6;
          if (i$2 < len && cmp(_p$2, arr$2.buf[arr$2.start + i$2 | 0]) === 0) {
            _tmp$6 = i$2 + 1 | 0;
            continue;
          } else {
            i = i$2;
            break;
          }
        }
        _tmp = limit$3;
        _tmp$2 = _M0MPC15array12MutArrayView5sliceGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr$2, i, len);
        _tmp$4 = _partitioned;
        _tmp$5 = balanced$2;
        continue;
      }
    }
    const left = _M0MPC15array12MutArrayView5sliceGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr$2, 0, _pivot);
    const right = _M0MPC15array12MutArrayView5sliceGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(arr$2, _pivot + 1 | 0, len);
    if ((left.end - left.start | 0) < (right.end - right.start | 0)) {
      _M0FPB22fixed__quick__sort__byGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(left, cmp, pred$2, limit$3);
      _tmp = limit$3;
      _tmp$2 = right;
      _tmp$3 = arr$2.buf[arr$2.start + _pivot | 0];
      _tmp$4 = _partitioned;
      _tmp$5 = balanced$2;
      continue;
    } else {
      _M0FPB22fixed__quick__sort__byGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(right, cmp, arr$2.buf[arr$2.start + _pivot | 0], limit$3);
      _tmp = limit$3;
      _tmp$2 = left;
      _tmp$4 = _partitioned;
      _tmp$5 = balanced$2;
      continue;
    }
  }
}
function _M0MPC15array12MutArrayView8sort__byGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(self, cmp) {
  _M0FPB22fixed__quick__sort__byGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(self, cmp, undefined, _M0FPB17fixed__get__limit(self.end - self.start | 0));
}
function _M0MPC15array5Array4sortGsE(self) {
  const _bind = self.length;
  _M0MPC15array12MutArrayView4sortGsE(new _M0TPB12MutArrayViewGsE(self, 0, _bind));
}
function _M0MPC15array5Array8sort__byGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(self, cmp) {
  const _bind = self.length;
  _M0MPC15array12MutArrayView8sort__byGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(new _M0TPB12MutArrayViewGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(self, 0, _bind), cmp);
}
function _M0MPC15array5Array8containsGsE(self, value) {
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (v === value) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function _M0MPC15array5Array4joinGsE(self, separator) {
  return _M0MPC15array9ArrayView4joinGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length), separator);
}
function _M0FPC28internal7strconv10range__errGuE() {
  return new _M0DTPC16result6ResultGuRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv15range__err__str));
}
function _M0FPC28internal7strconv11syntax__errGdE() {
  return new _M0DTPC16result6ResultGdRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGORPC28internal7strconv6NumberE() {
  return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGuE() {
  return new _M0DTPC16result6ResultGuRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE() {
  return new _M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(self, init, f) {
  let _tmp = self;
  let _tmp$2 = init;
  let _tmp$3 = 0;
  while (true) {
    const str = _tmp;
    const ret = _tmp$2;
    const len = _tmp$3;
    _L: {
      if ((str.end - str.start | 0) >= 1) {
        const _x = str.str.charCodeAt(str.start);
        if (_x >= 48 && _x <= 57) {
          const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          _tmp = _x$2;
          _tmp$2 = f(_x - 48 | 0, ret);
          _tmp$3 = len + 1 | 0;
          continue;
        } else {
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            _tmp = _x$2;
            continue;
          } else {
            break _L;
          }
        }
      } else {
        break _L;
      }
    }
    return { _0: str, _1: ret, _2: len };
  }
}
function _M0FPC28internal7strconv13parse__digits(s, x) {
  return _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(s, x, (digit, acc) => BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + BigInt.asUintN(64, BigInt(digit >>> 0))));
}
function _M0FPC28internal7strconv20try__parse__19digits(s, x) {
  let x$2 = x;
  let len = 0;
  let _tmp = s;
  while (true) {
    const s$2 = _tmp;
    let s$3;
    _L: {
      if ((s$2.end - s$2.start | 0) >= 1) {
        const _x = s$2.str.charCodeAt(s$2.start);
        if (_x >= 48 && _x <= 57) {
          const _x$2 = new _M0TPC16string10StringView(s$2.str, s$2.start + 1 | 0, s$2.end);
          if (BigInt.asUintN(64, x$2) < BigInt.asUintN(64, _M0FPC28internal7strconv17min__19digit__int)) {
            len = len + 1 | 0;
            x$2 = BigInt.asUintN(64, BigInt.asUintN(64, x$2 * 10n) + BigInt.asUintN(64, BigInt((_x - 48 | 0) >>> 0)));
            _tmp = _x$2;
            continue;
          } else {
            s$3 = s$2;
            break _L;
          }
        } else {
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(s$2.str, s$2.start + 1 | 0, s$2.end);
            _tmp = _x$2;
            continue;
          } else {
            s$3 = s$2;
            break _L;
          }
        }
      } else {
        s$3 = s$2;
        break _L;
      }
    }
    return { _0: s$3, _1: x$2, _2: len };
  }
}
function _M0FPC28internal7strconv17parse__scientific(s) {
  let s$2 = s;
  let neg_exp = false;
  let rest;
  let ch;
  _L: {
    _L$2: {
      const _bind = s$2;
      if ((_bind.end - _bind.start | 0) >= 1) {
        const _x = _bind.str.charCodeAt(_bind.start);
        switch (_x) {
          case 43: {
            const _x$2 = new _M0TPC16string10StringView(_bind.str, _bind.start + 1 | 0, _bind.end);
            rest = _x$2;
            ch = _x;
            break _L$2;
          }
          case 45: {
            const _x$3 = new _M0TPC16string10StringView(_bind.str, _bind.start + 1 | 0, _bind.end);
            rest = _x$3;
            ch = _x;
            break _L$2;
          }
        }
      }
      break _L;
    }
    neg_exp = ch === 45;
    s$2 = rest;
  }
  _L$2: {
    const _bind = s$2;
    if ((_bind.end - _bind.start | 0) >= 1) {
      const _x = _bind.str.charCodeAt(_bind.start);
      if (_x >= 48 && _x <= 57) {
        const _bind$2 = _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(s$2, _M0FPC28internal7strconv17parse__scientificN8exp__numS1310, (digit, exp_num) => BigInt.asIntN(64, exp_num) < BigInt.asIntN(64, 65536n) ? BigInt.asUintN(64, BigInt.asUintN(64, 10n * exp_num) + BigInt.asUintN(64, BigInt(digit))) : exp_num);
        const _s = _bind$2._0;
        const _exp_num = _bind$2._1;
        return neg_exp ? { _0: _s, _1: BigInt.asUintN(64, -_exp_num) } : { _0: _s, _1: _exp_num };
      } else {
        break _L$2;
      }
    } else {
      break _L$2;
    }
  }
  return undefined;
}
function _M0FPC28internal7strconv13parse__number(s) {
  let s$2;
  let negative;
  _L: {
    let rest;
    _L$2: {
      if ((s.end - s.start | 0) >= 1) {
        const _x = s.str.charCodeAt(s.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(s.str, s.start + 1 | 0, s.end);
            s$2 = _x$2;
            negative = true;
            break _L;
          }
          case 43: {
            const _x$3 = new _M0TPC16string10StringView(s.str, s.start + 1 | 0, s.end);
            rest = _x$3;
            break _L$2;
          }
          default: {
            rest = s;
            break _L$2;
          }
        }
      } else {
        rest = s;
        break _L$2;
      }
    }
    s$2 = rest;
    negative = false;
    break _L;
  }
  if ((s$2.end - s$2.start | 0) === 0) {
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
  }
  const _bind = _M0FPC28internal7strconv13parse__digits(s$2, 0n);
  const _s = _bind._0;
  const _mantissa = _bind._1;
  const _consumed = _bind._2;
  let mantissa = _mantissa;
  let s$3 = _s;
  let n_digits = _consumed;
  let n_after_dot = 0;
  let exponent = 0n;
  const _bind$2 = s$3;
  if ((_bind$2.end - _bind$2.start | 0) >= 1) {
    const _x = _bind$2.str.charCodeAt(_bind$2.start);
    if (_x === 46) {
      const _x$2 = new _M0TPC16string10StringView(_bind$2.str, _bind$2.start + 1 | 0, _bind$2.end);
      s$3 = _x$2;
      const _bind$3 = _M0FPC28internal7strconv13parse__digits(s$3, mantissa);
      const _new_s = _bind$3._0;
      const _new_mantissa = _bind$3._1;
      const _consumed_digit = _bind$3._2;
      s$3 = _new_s;
      mantissa = _new_mantissa;
      n_after_dot = _consumed_digit;
      exponent = BigInt.asUintN(64, -BigInt.asUintN(64, BigInt(n_after_dot)));
    }
  }
  n_digits = n_digits + n_after_dot | 0;
  if (n_digits === 0) {
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
  }
  let exp_number = 0n;
  let rest;
  _L$2: {
    _L$3: {
      const _bind$3 = s$3;
      if ((_bind$3.end - _bind$3.start | 0) >= 1) {
        const _x = _bind$3.str.charCodeAt(_bind$3.start);
        switch (_x) {
          case 101: {
            const _x$2 = new _M0TPC16string10StringView(_bind$3.str, _bind$3.start + 1 | 0, _bind$3.end);
            rest = _x$2;
            break _L$3;
          }
          case 69: {
            const _x$3 = new _M0TPC16string10StringView(_bind$3.str, _bind$3.start + 1 | 0, _bind$3.end);
            rest = _x$3;
            break _L$3;
          }
        }
      }
      break _L$2;
    }
    const _bind$3 = _M0FPC28internal7strconv17parse__scientific(rest);
    let _bind$4;
    if (_bind$3 === undefined) {
      return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
    } else {
      const _Some = _bind$3;
      _bind$4 = _Some;
    }
    const _new_s = _bind$4._0;
    const _exp_number_val = _bind$4._1;
    s$3 = _new_s;
    exp_number = _exp_number_val;
    exponent = BigInt.asUintN(64, exponent + exp_number);
  }
  const _bind$3 = s$3;
  if ((_bind$3.end - _bind$3.start | 0) === 0) {
    if (n_digits <= 19) {
      return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(new _M0TPC28internal7strconv6Number(exponent, mantissa, negative, false));
    }
    n_digits = n_digits - 19 | 0;
    let many_digits = false;
    let _tmp = s.str;
    let _tmp$2 = s.start;
    let _tmp$3 = s.end;
    _L$3: while (true) {
      const s_str = _tmp;
      const s_start = _tmp$2;
      const s_end = _tmp$3;
      _L$4: {
        let rest$2;
        let ch;
        _L$5: {
          if ((s_end - s_start | 0) >= 1) {
            const _x = s_str.charCodeAt(s_start);
            switch (_x) {
              case 48: {
                const _x$2 = new _M0TPC16string10StringView(s_str, s_start + 1 | 0, s_end);
                rest$2 = _x$2;
                ch = _x;
                break _L$5;
              }
              case 46: {
                const _x$3 = new _M0TPC16string10StringView(s_str, s_start + 1 | 0, s_end);
                rest$2 = _x$3;
                ch = _x;
                break _L$5;
              }
              default: {
                break _L$4;
              }
            }
          } else {
            break _L$4;
          }
        }
        n_digits = n_digits - ((ch - 46 | 0) / 2 | 0) | 0;
        _tmp = rest$2.str;
        _tmp$2 = rest$2.start;
        _tmp$3 = rest$2.end;
        continue;
      }
      break;
    }
    let mantissa$2 = mantissa;
    if (n_digits > 0) {
      many_digits = true;
      mantissa$2 = 0n;
      const _bind$4 = _M0FPC28internal7strconv20try__parse__19digits(s, mantissa$2);
      const _s$2 = _bind$4._0;
      const _new_mantissa = _bind$4._1;
      const _consumed_digit = _bind$4._2;
      mantissa$2 = _new_mantissa;
      let _tmp$4;
      if (BigInt.asUintN(64, mantissa$2) >= BigInt.asUintN(64, _M0FPC28internal7strconv17min__19digit__int)) {
        _tmp$4 = _consumed_digit;
      } else {
        if (_M0MPC16string6String24char__length__ge_2einner(_s$2.str, 1, _s$2.start, _s$2.end)) {
          const _tmp$5 = _s$2.str;
          const _bind$5 = _M0MPC16string6String29offset__of__nth__char_2einner(_s$2.str, 1, _s$2.start, _s$2.end);
          let _tmp$6;
          if (_bind$5 === undefined) {
            _tmp$6 = _s$2.end;
          } else {
            const _Some = _bind$5;
            _tmp$6 = _Some;
          }
          const _x = new _M0TPC16string10StringView(_tmp$5, _tmp$6, _s$2.end);
          const _bind$6 = _M0FPC28internal7strconv20try__parse__19digits(_x, mantissa$2);
          const _new_mantissa$2 = _bind$6._1;
          const _consumed_digit$2 = _bind$6._2;
          mantissa$2 = _new_mantissa$2;
          _tmp$4 = _consumed_digit$2;
        } else {
          return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
        }
      }
      exponent = BigInt.asUintN(64, BigInt(_tmp$4));
      exponent = BigInt.asUintN(64, exponent + exp_number);
    }
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(new _M0TPC28internal7strconv6Number(exponent, mantissa$2, negative, many_digits));
  } else {
    return _M0FPC28internal7strconv11syntax__errGORPC28internal7strconv6NumberE();
  }
}
function _M0FPC28internal7strconv15parse__inf__nan(rest) {
  let pos;
  let rest$2;
  _L: {
    let rest$3;
    _L$2: {
      if ((rest.end - rest.start | 0) >= 1) {
        const _x = rest.str.charCodeAt(rest.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(rest.str, rest.start + 1 | 0, rest.end);
            pos = false;
            rest$2 = _x$2;
            break _L;
          }
          case 43: {
            const _x$3 = new _M0TPC16string10StringView(rest.str, rest.start + 1 | 0, rest.end);
            rest$3 = _x$3;
            break _L$2;
          }
          default: {
            rest$3 = rest;
            break _L$2;
          }
        }
      } else {
        rest$3 = rest;
        break _L$2;
      }
    }
    pos = true;
    rest$2 = rest$3;
    break _L;
  }
  let _cursor_295 = 0;
  const _input_end_297 = rest$2.end - rest$2.start | 0;
  const _start_296 = _cursor_295;
  let _accept_state_298 = -1;
  let _match_end_299 = -1;
  let _state_300 = 2;
  while (true) {
    if (_state_300 !== 14) {
      if (_state_300 < 2) {
        _accept_state_298 = _state_300;
        _match_end_299 = _cursor_295;
      }
      const _tmp = Math.imul(_state_300, 8) | 0;
      let _next_char_303;
      if (_cursor_295 < _input_end_297) {
        const _char_302 = rest$2.str.charCodeAt(rest$2.start + _cursor_295 | 0);
        _cursor_295 = _cursor_295 + 1 | 0;
        _next_char_303 = _char_302;
      } else {
        _next_char_303 = -1;
      }
      const _p = _tmp + (_next_char_303 < 90 ? (_next_char_303 < 73 ? (_next_char_303 < 66 ? (_next_char_303 < 0 ? 0 : _next_char_303 > 64 ? 1 : 7) : _next_char_303 > 69 ? (_next_char_303 < 71 ? 2 : 7) : 7) : _next_char_303 > 73 ? (_next_char_303 < 84 ? (_next_char_303 < 78 ? 7 : _next_char_303 > 78 ? 7 : 4) : _next_char_303 > 84 ? (_next_char_303 < 89 ? 7 : 6) : 5) : 3) : _next_char_303 > 96 ? (_next_char_303 < 110 ? (_next_char_303 < 103 ? (_next_char_303 < 98 ? 1 : _next_char_303 > 101 ? 2 : 7) : _next_char_303 > 104 ? (_next_char_303 < 106 ? 3 : 7) : 7) : _next_char_303 > 110 ? (_next_char_303 < 117 ? (_next_char_303 < 116 ? 7 : 5) : _next_char_303 > 120 ? (_next_char_303 < 122 ? 6 : 7) : 7) : 4) : 7) | 0;
      _state_300 = _M0FPC28internal7strconv15parse__inf__nanN25_2atransition__table__304S1389[_p];
      continue;
    } else {
      break;
    }
  }
  const _bind = _accept_state_298;
  switch (_bind) {
    case 0: {
      _cursor_295 = _match_end_299;
      return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double14not__a__number);
    }
    case 1: {
      _cursor_295 = _match_end_299;
      return pos ? new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double8infinity) : new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double13neg__infinity);
    }
    default: {
      _cursor_295 = _start_296;
      return _M0FPC28internal7strconv11syntax__errGdE();
    }
  }
}
function _M0FPC28internal7strconv12checked__mul(a, b) {
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 0n) || BigInt.asUintN(64, b) === BigInt.asUintN(64, 0n)) {
    return _M0FPC28internal7strconv12checked__mulN6constrS1409;
  }
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 1n)) {
    return b;
  }
  if (BigInt.asUintN(64, b) === BigInt.asUintN(64, 1n)) {
    return a;
  }
  if ($i64_clz(b) === 0 || $i64_clz(a) === 0) {
    return undefined;
  }
  if (b === 0n) {
    $panic();
  }
  const quotient = BigInt.asUintN(64, BigInt.asUintN(64, 18446744073709551615n) / BigInt.asUintN(64, b));
  if (BigInt.asUintN(64, a) > BigInt.asUintN(64, quotient)) {
    return undefined;
  }
  return BigInt.asUintN(64, a * b);
}
function _M0FPC28internal7strconv17check__underscore(str) {
  const _p = 95;
  if (_M0MPC16string10StringView20contains__code__unit(str, _p)) {
    let rest;
    if ((str.end - str.start | 0) >= 1) {
      const _x = str.str.charCodeAt(str.start);
      switch (_x) {
        case 43: {
          const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          rest = _x$2;
          break;
        }
        case 45: {
          const _x$3 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          rest = _x$3;
          break;
        }
        default: {
          rest = str;
        }
      }
    } else {
      rest = str;
    }
    let rest$2;
    let allow_underscore;
    let hex;
    _L: {
      let _cursor_213 = 0;
      const _input_end_215 = rest.end - rest.start | 0;
      const _start_214 = _cursor_213;
      let _accept_state_216 = -1;
      let _match_end_217 = -1;
      let _state_218 = 3;
      while (true) {
        if (_state_218 !== 5) {
          if (_state_218 < 3) {
            _accept_state_216 = _state_218;
            _match_end_217 = _cursor_213;
          }
          const _tmp = Math.imul(_state_218, 5) | 0;
          let _next_char_221;
          if (_cursor_213 < _input_end_215) {
            const _char_220 = rest.str.charCodeAt(rest.start + _cursor_213 | 0);
            _cursor_213 = _cursor_213 + 1 | 0;
            _next_char_221 = _char_220;
          } else {
            _next_char_221 = -1;
          }
          const _p$2 = _tmp + (_next_char_221 < 88 ? (_next_char_221 < 66 ? (_next_char_221 < 48 ? 4 : _next_char_221 > 48 ? 4 : 0) : _next_char_221 > 66 ? (_next_char_221 < 79 ? 4 : _next_char_221 > 79 ? 4 : 2) : 1) : _next_char_221 > 88 ? (_next_char_221 < 111 ? (_next_char_221 < 98 ? 4 : _next_char_221 > 98 ? 4 : 1) : _next_char_221 > 111 ? (_next_char_221 < 120 ? 4 : _next_char_221 > 120 ? 4 : 3) : 2) : 3) | 0;
          _state_218 = _M0FPC28internal7strconv17check__underscoreN25_2atransition__table__222S1413[_p$2];
          continue;
        } else {
          break;
        }
      }
      const _bind = _accept_state_216;
      switch (_bind) {
        case 0: {
          _cursor_213 = _match_end_217;
          const rest$3 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
          rest$2 = rest$3;
          allow_underscore = true;
          hex = false;
          break _L;
        }
        case 1: {
          _cursor_213 = _match_end_217;
          const rest$4 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
          rest$2 = rest$4;
          allow_underscore = true;
          hex = false;
          break _L;
        }
        case 2: {
          _cursor_213 = _match_end_217;
          const rest$5 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
          rest$2 = rest$5;
          allow_underscore = true;
          hex = true;
          break _L;
        }
        default: {
          _cursor_213 = _start_214;
          rest$2 = rest;
          allow_underscore = false;
          hex = false;
          break _L;
        }
      }
    }
    let _tmp = rest$2.str;
    let _tmp$2 = rest$2.start;
    let _tmp$3 = rest$2.end;
    let _tmp$4 = allow_underscore;
    let _tmp$5 = false;
    while (true) {
      const rest_str = _tmp;
      const rest_start = _tmp$2;
      const rest_end = _tmp$3;
      const allow_underscore$2 = _tmp$4;
      const follow_underscore = _tmp$5;
      let rest$3;
      _L$2: {
        _L$3: {
          let rest$4;
          _L$4: {
            _L$5: {
              let rest$5;
              _L$6: {
                let rest$6;
                _L$7: {
                  if ((rest_end - rest_start | 0) === 0) {
                    return true;
                  } else {
                    if ((rest_end - rest_start | 0) === 1) {
                      const _x = rest_str.charCodeAt(rest_start);
                      if (_x === 95) {
                        return false;
                      } else {
                        if (_x >= 48 && _x <= 57) {
                          const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                          rest$6 = _x$2;
                          break _L$7;
                        } else {
                          if (_x >= 97 && _x <= 102) {
                            const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                            if (hex) {
                              rest$5 = _x$2;
                              break _L$6;
                            } else {
                              if (_x === 101) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (follow_underscore === true) {
                                  break _L$3;
                                } else {
                                  rest$3 = _x$2;
                                  break _L$2;
                                }
                              }
                            }
                          } else {
                            if (_x >= 65 && _x <= 70) {
                              const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                              if (hex) {
                                rest$5 = _x$2;
                                break _L$6;
                              } else {
                                if (_x === 69) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (follow_underscore === true) {
                                    break _L$3;
                                  } else {
                                    rest$3 = _x$2;
                                    break _L$2;
                                  }
                                }
                              }
                            } else {
                              if (_x === 46) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (_x === 43) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (_x === 45) {
                                    if (follow_underscore === true) {
                                      break _L$5;
                                    } else {
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                      rest$4 = _x$2;
                                      break _L$4;
                                    }
                                  } else {
                                    if (follow_underscore === true) {
                                      break _L$3;
                                    } else {
                                      const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(rest_str, 1, rest_start, rest_end);
                                      let _tmp$6;
                                      if (_bind === undefined) {
                                        _tmp$6 = rest_end;
                                      } else {
                                        const _Some = _bind;
                                        _tmp$6 = _Some;
                                      }
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, _tmp$6, rest_end);
                                      rest$3 = _x$2;
                                      break _L$2;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    } else {
                      const _x = rest_str.charCodeAt(rest_start);
                      if (_x === 95) {
                        if (allow_underscore$2 === false) {
                          return false;
                        } else {
                          const _bind = rest_start + 1 | 0;
                          _tmp$2 = _bind;
                          _tmp$4 = false;
                          _tmp$5 = true;
                          continue;
                        }
                      } else {
                        if (_x >= 48 && _x <= 57) {
                          const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                          rest$6 = _x$2;
                          break _L$7;
                        } else {
                          if (_x >= 97 && _x <= 102) {
                            const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                            if (hex) {
                              rest$5 = _x$2;
                              break _L$6;
                            } else {
                              if (_x === 101) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (follow_underscore === true) {
                                  break _L$3;
                                } else {
                                  rest$3 = _x$2;
                                  break _L$2;
                                }
                              }
                            }
                          } else {
                            if (_x >= 65 && _x <= 70) {
                              const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                              if (hex) {
                                rest$5 = _x$2;
                                break _L$6;
                              } else {
                                if (_x === 69) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (follow_underscore === true) {
                                    break _L$3;
                                  } else {
                                    rest$3 = _x$2;
                                    break _L$2;
                                  }
                                }
                              }
                            } else {
                              if (_x === 46) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (_x === 43) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (_x === 45) {
                                    if (follow_underscore === true) {
                                      break _L$5;
                                    } else {
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                      rest$4 = _x$2;
                                      break _L$4;
                                    }
                                  } else {
                                    if (follow_underscore === true) {
                                      break _L$3;
                                    } else {
                                      const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(rest_str, 1, rest_start, rest_end);
                                      let _tmp$6;
                                      if (_bind === undefined) {
                                        _tmp$6 = rest_end;
                                      } else {
                                        const _Some = _bind;
                                        _tmp$6 = _Some;
                                      }
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, _tmp$6, rest_end);
                                      rest$3 = _x$2;
                                      break _L$2;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                _tmp = rest$6.str;
                _tmp$2 = rest$6.start;
                _tmp$3 = rest$6.end;
                _tmp$4 = true;
                _tmp$5 = false;
                continue;
              }
              _tmp = rest$5.str;
              _tmp$2 = rest$5.start;
              _tmp$3 = rest$5.end;
              _tmp$4 = true;
              _tmp$5 = false;
              continue;
            }
            return false;
          }
          _tmp = rest$4.str;
          _tmp$2 = rest$4.start;
          _tmp$3 = rest$4.end;
          _tmp$4 = false;
          _tmp$5 = false;
          continue;
        }
        return false;
      }
      _tmp = rest$3.str;
      _tmp$2 = rest$3.start;
      _tmp$3 = rest$3.end;
      _tmp$4 = false;
      _tmp$5 = false;
      continue;
    }
  } else {
    return true;
  }
}
function _M0FPC28internal7strconv14eisel__umul128(a, b) {
  const a_lo = BigInt.asUintN(64, a & 4294967295n);
  const a_hi = BigInt.asUintN(64, BigInt.asUintN(64, a) >> BigInt(32 & 63));
  const b_lo = BigInt.asUintN(64, b & 4294967295n);
  const b_hi = BigInt.asUintN(64, BigInt.asUintN(64, b) >> BigInt(32 & 63));
  const x = BigInt.asUintN(64, a_lo * b_lo);
  const y = BigInt.asUintN(64, BigInt.asUintN(64, a_hi * b_lo) + BigInt.asUintN(64, BigInt.asUintN(64, x) >> BigInt(32 & 63)));
  const z = BigInt.asUintN(64, BigInt.asUintN(64, a_lo * b_hi) + BigInt.asUintN(64, y & 4294967295n));
  const hi = BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, a_hi * b_hi) + BigInt.asUintN(64, BigInt.asUintN(64, y) >> BigInt(32 & 63))) + BigInt.asUintN(64, BigInt.asUintN(64, z) >> BigInt(32 & 63)));
  return new _M0TPC28internal7strconv12EiselProduct(BigInt.asUintN(64, a * b), hi);
}
function _M0FPC28internal7strconv20try__eisel__lemire64(mantissa, exponent, negative) {
  if (BigInt.asUintN(64, mantissa) === BigInt.asUintN(64, 0n)) {
    return negative ? $i64_reinterpret_f64(9223372036854775808n) : 0;
  }
  if (BigInt.asIntN(64, exponent) < BigInt.asIntN(64, 18446744073709551268n) || BigInt.asIntN(64, exponent) > BigInt.asIntN(64, 347n)) {
    return _M0FPC16double14not__a__number;
  }
  const exponent$2 = Number(BigInt.asIntN(32, exponent)) | 0;
  const table_index = Math.imul(exponent$2 - -348 | 0, 2) | 0;
  const pow_hi = table_index >>> 0 < _M0FPC28internal7strconv27eisel__lemire__pow10__table.length ? _M0FPC28internal7strconv27eisel__lemire__pow10__table[table_index] : $oob();
  const _p = table_index + 1 | 0;
  const pow_lo = _p >>> 0 < _M0FPC28internal7strconv27eisel__lemire__pow10__table.length ? _M0FPC28internal7strconv27eisel__lemire__pow10__table[_p] : $oob();
  const pow_exp2 = 1 + (Math.imul(exponent$2, 108853) >> 15) | 0;
  const leading_zeros = $i64_clz(mantissa);
  const normalized = BigInt.asUintN(64, mantissa << BigInt(leading_zeros & 63));
  let result_exp2 = ((pow_exp2 + 63 | 0) + 1023 | 0) - leading_zeros | 0;
  const product = _M0FPC28internal7strconv14eisel__umul128(normalized, pow_hi);
  let product_hi = product.hi;
  let product_lo = product.lo;
  if (BigInt.asUintN(64, BigInt.asUintN(64, product_hi & 511n)) === BigInt.asUintN(64, 511n) && BigInt.asUintN(64, BigInt.asUintN(64, product_lo + normalized)) < BigInt.asUintN(64, normalized)) {
    const wider = _M0FPC28internal7strconv14eisel__umul128(normalized, pow_lo);
    let merged_hi = product_hi;
    const merged_lo = BigInt.asUintN(64, product_lo + wider.hi);
    if (BigInt.asUintN(64, merged_lo) < BigInt.asUintN(64, product_lo)) {
      merged_hi = BigInt.asUintN(64, merged_hi + 1n);
    }
    if (BigInt.asUintN(64, BigInt.asUintN(64, merged_hi & 511n)) === BigInt.asUintN(64, 511n) && (BigInt.asUintN(64, BigInt.asUintN(64, merged_lo + 1n)) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, BigInt.asUintN(64, wider.lo + normalized)) < BigInt.asUintN(64, normalized))) {
      return _M0FPC16double14not__a__number;
    }
    product_hi = merged_hi;
    product_lo = merged_lo;
  }
  const top_bit = Number(BigInt.asIntN(32, BigInt.asUintN(64, BigInt.asUintN(64, product_hi) >> BigInt(63 & 63)))) | 0;
  let result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, product_hi) >> BigInt(top_bit + 9 & 63));
  result_exp2 = result_exp2 - (1 - top_bit | 0) | 0;
  if (BigInt.asUintN(64, product_lo) === BigInt.asUintN(64, 0n) && (BigInt.asUintN(64, BigInt.asUintN(64, product_hi & 511n)) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa & 3n)) === BigInt.asUintN(64, 1n))) {
    return _M0FPC16double14not__a__number;
  }
  result_mantissa = BigInt.asUintN(64, result_mantissa + BigInt.asUintN(64, result_mantissa & 1n));
  result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(1 & 63));
  if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(53 & 63))) > BigInt.asUintN(64, 0n)) {
    result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(1 & 63));
    result_exp2 = result_exp2 + 1 | 0;
  }
  if (result_exp2 <= 0 || result_exp2 >= 2047) {
    return _M0FPC16double14not__a__number;
  }
  const exponent_bits = BigInt.asUintN(64, BigInt.asUintN(64, BigInt(result_exp2 >>> 0)) << BigInt(52 & 63));
  let result_bits = BigInt.asUintN(64, exponent_bits | BigInt.asUintN(64, result_mantissa & 4503599627370495n));
  if (negative) {
    result_bits = BigInt.asUintN(64, result_bits | 9223372036854775808n);
  }
  return $i64_reinterpret_f64(result_bits);
}
function _M0MPC28internal7strconv7Decimal9new__priv() {
  return new _M0TPC28internal7strconv7Decimal($makebytes(800, 0), 0, 0, false, false, 0);
}
function _M0MPC28internal7strconv7Decimal4trim(self) {
  while (true) {
    let _tmp;
    if (self.digits_num > 0) {
      const _tmp$2 = self.digits;
      const _tmp$3 = self.digits_num - 1 | 0;
      const _p = _tmp$3 >>> 0 < _tmp$2.length ? _tmp$2[_tmp$3] : $oob();
      const _p$2 = 0;
      _tmp = _p === _p$2;
    } else {
      _tmp = false;
    }
    if (_tmp) {
      self.digits_num = self.digits_num - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (self.digits_num === 0) {
    self.decimal_point = 0;
    return;
  } else {
    return;
  }
}
function _M0FPC28internal7strconv26parse__decimal__from__view(str) {
  const d = _M0MPC28internal7strconv7Decimal9new__priv();
  let has_dp = false;
  let has_digits = false;
  let rest;
  _L: {
    _L$2: {
      if ((str.end - str.start | 0) >= 1) {
        const _x = str.str.charCodeAt(str.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            d.negative = true;
            rest = _x$2;
            break;
          }
          case 43: {
            rest = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            break;
          }
          default: {
            break _L$2;
          }
        }
      } else {
        break _L$2;
      }
      break _L;
    }
    rest = str;
  }
  let rest$2;
  let _tmp = rest;
  while (true) {
    const rest$3 = _tmp;
    let rest$4;
    _L$2: {
      _L$3: {
        if ((rest$3.end - rest$3.start | 0) >= 1) {
          const _x = rest$3.str.charCodeAt(rest$3.start);
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
            _tmp = _x$2;
            continue;
          } else {
            if (_x === 46) {
              const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
              if (!has_dp) {
                has_dp = true;
                d.decimal_point = d.digits_num;
                _tmp = _x$2;
                continue;
              } else {
                const _bind = _M0FPC28internal7strconv11syntax__errGuE();
                if (_bind.$tag === 1) {
                  const _ok = _bind;
                  _ok._0;
                } else {
                  return _bind;
                }
              }
            } else {
              if (_x >= 48 && _x <= 57) {
                const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                has_digits = true;
                if (_x === 48 && d.digits_num === 0) {
                  d.decimal_point = d.decimal_point - 1 | 0;
                  _tmp = _x$2;
                  continue;
                }
                if (d.digits_num < d.digits.length) {
                  const _tmp$2 = d.digits;
                  const _tmp$3 = d.digits_num;
                  if (_tmp$3 >>> 0 < _tmp$2.length) {
                    _tmp$2[_tmp$3] = (_x - 48 | 0) & 255;
                  } else {
                    $oob();
                  }
                  d.digits_num = d.digits_num + 1 | 0;
                } else {
                  if (!has_dp) {
                    d.overflowed = d.overflowed + 1 | 0;
                  }
                  if (_x !== 48) {
                    d.truncated = true;
                  }
                }
                _tmp = _x$2;
                continue;
              } else {
                rest$4 = rest$3;
                break _L$3;
              }
            }
          }
        } else {
          rest$4 = rest$3;
          break _L$3;
        }
        break _L$2;
      }
      rest$2 = rest$4;
      break;
    }
    continue;
  }
  if (has_digits) {
    if (!has_dp) {
      d.decimal_point = d.digits_num;
    }
    let rest$3;
    let rest$4;
    _L$2: {
      _L$3: {
        if ((rest$2.end - rest$2.start | 0) >= 1) {
          const _x = rest$2.str.charCodeAt(rest$2.start);
          switch (_x) {
            case 101: {
              const _x$2 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
              rest$4 = _x$2;
              break _L$3;
            }
            case 69: {
              const _x$3 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
              rest$4 = _x$3;
              break _L$3;
            }
            default: {
              rest$3 = rest$2;
            }
          }
        } else {
          rest$3 = rest$2;
        }
        break _L$2;
      }
      let exp_sign = 1;
      let rest$5;
      if ((rest$4.end - rest$4.start | 0) >= 1) {
        const _x = rest$4.str.charCodeAt(rest$4.start);
        switch (_x) {
          case 43: {
            rest$5 = new _M0TPC16string10StringView(rest$4.str, rest$4.start + 1 | 0, rest$4.end);
            break;
          }
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(rest$4.str, rest$4.start + 1 | 0, rest$4.end);
            exp_sign = -1;
            rest$5 = _x$2;
            break;
          }
          default: {
            rest$5 = rest$4;
          }
        }
      } else {
        rest$5 = rest$4;
      }
      _L$4: {
        _L$5: {
          if ((rest$5.end - rest$5.start | 0) >= 1) {
            const _x = rest$5.str.charCodeAt(rest$5.start);
            if (_x >= 48 && _x <= 57) {
              const effective_dp = d.decimal_point + d.overflowed | 0;
              const exp_limit = exp_sign > 0 ? (effective_dp < 311 ? 311 - effective_dp | 0 : 0) : effective_dp > -331 ? effective_dp + 331 | 0 : 0;
              let exp = 0;
              let rest$6;
              let _tmp$2 = rest$5;
              while (true) {
                const rest$7 = _tmp$2;
                let rest$8;
                _L$6: {
                  if ((rest$7.end - rest$7.start | 0) >= 1) {
                    const _x$2 = rest$7.str.charCodeAt(rest$7.start);
                    if (_x$2 === 95) {
                      const _x$3 = new _M0TPC16string10StringView(rest$7.str, rest$7.start + 1 | 0, rest$7.end);
                      _tmp$2 = _x$3;
                      continue;
                    } else {
                      if (_x$2 >= 48 && _x$2 <= 57) {
                        const _x$3 = new _M0TPC16string10StringView(rest$7.str, rest$7.start + 1 | 0, rest$7.end);
                        if (exp < exp_limit) {
                          exp = (Math.imul(exp, 10) | 0) + (_x$2 - 48 | 0) | 0;
                          if (exp > exp_limit) {
                            exp = exp_limit;
                          }
                        }
                        _tmp$2 = _x$3;
                        continue;
                      } else {
                        rest$8 = rest$7;
                        break _L$6;
                      }
                    }
                  } else {
                    rest$8 = rest$7;
                    break _L$6;
                  }
                }
                rest$6 = rest$8;
                break;
              }
              d.decimal_point = d.decimal_point + (Math.imul(exp_sign, exp) | 0) | 0;
              rest$3 = rest$6;
            } else {
              break _L$5;
            }
          } else {
            break _L$5;
          }
          break _L$4;
        }
        const _bind = _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE();
        if (_bind.$tag === 1) {
          const _ok = _bind;
          rest$3 = _ok._0;
        } else {
          return _bind;
        }
      }
    }
    if ((rest$3.end - rest$3.start | 0) === 0) {
      _M0MPC28internal7strconv7Decimal4trim(d);
      return new _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok(d);
    } else {
      return _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE();
    }
  } else {
    return _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE();
  }
}
function _M0FPC28internal7strconv20parse__decimal__priv(str) {
  return _M0FPC28internal7strconv26parse__decimal__from__view(str);
}
function _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, negative) {
  const biased_exp = exponent - _M0FPC28internal7strconv12double__info.bias | 0;
  let bits = BigInt.asUintN(64, mantissa & BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)) - 1n));
  const exp_bits = BigInt.asUintN(64, BigInt(biased_exp & ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)));
  bits = BigInt.asUintN(64, bits | BigInt.asUintN(64, exp_bits << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)));
  if (negative) {
    bits = BigInt.asUintN(64, bits | BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)) << BigInt(_M0FPC28internal7strconv12double__info.exponent_bits & 63)));
  }
  return bits;
}
function _M0MPC28internal7strconv7Decimal17should__round__up(self, d) {
  if (d < 0 || d >= self.digits_num) {
    return false;
  }
  let _tmp;
  const _tmp$2 = self.digits;
  if ((d >>> 0 < _tmp$2.length ? _tmp$2[d] : $oob()) === 5) {
    _tmp = (d + 1 | 0) === self.digits_num;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    if (self.truncated) {
      return true;
    }
    let _tmp$3;
    if (d > 0) {
      const _tmp$4 = self.digits;
      const _tmp$5 = d - 1 | 0;
      _tmp$3 = ((_tmp$5 >>> 0 < _tmp$4.length ? _tmp$4[_tmp$5] : $oob()) % 2 | 0) !== 0;
    } else {
      _tmp$3 = false;
    }
    return _tmp$3;
  }
  const _tmp$3 = self.digits;
  return (d >>> 0 < _tmp$3.length ? _tmp$3[d] : $oob()) >= 5;
}
function _M0MPC28internal7strconv7Decimal16rounded__integer(self) {
  if (self.decimal_point > 20) {
    return 18446744073709551615n;
  }
  let _tmp = 0n;
  let _tmp$2 = 0;
  while (true) {
    const n = _tmp;
    const i = _tmp$2;
    if (i < self.decimal_point && i < self.digits_num) {
      const _tmp$3 = BigInt.asUintN(64, n * 10n);
      const _tmp$4 = self.digits;
      const _p = i >>> 0 < _tmp$4.length ? _tmp$4[i] : $oob();
      _tmp = BigInt.asUintN(64, _tmp$3 + BigInt.asUintN(64, BigInt(_p)));
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      let n$2;
      let _tmp$3 = n;
      let _tmp$4 = i;
      while (true) {
        const n$3 = _tmp$3;
        const i$2 = _tmp$4;
        if (i$2 < self.decimal_point) {
          _tmp$3 = BigInt.asUintN(64, n$3 * 10n);
          _tmp$4 = i$2 + 1 | 0;
          continue;
        } else {
          n$2 = n$3;
          break;
        }
      }
      return _M0MPC28internal7strconv7Decimal17should__round__up(self, self.decimal_point) ? BigInt.asUintN(64, n$2 + 1n) : n$2;
    }
  }
}
function _M0MPC28internal7strconv7Decimal11new__digits(self, s) {
  const new_digits = (s >>> 0 < _M0FPC28internal7strconv19left__shift__cheats.length ? _M0FPC28internal7strconv19left__shift__cheats[s] : $oob())._0;
  const cheat_num = (s >>> 0 < _M0FPC28internal7strconv19left__shift__cheats.length ? _M0FPC28internal7strconv19left__shift__cheats[s] : $oob())._1;
  const _bind = cheat_num.length;
  let less;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const code_unit = cheat_num.charCodeAt(i);
      if (i >= self.digits_num) {
        less = true;
        break;
      }
      const d = code_unit - 48 | 0;
      const _tmp$2 = self.digits;
      if ((i >>> 0 < _tmp$2.length ? _tmp$2[i] : $oob()) !== d) {
        const _tmp$3 = self.digits;
        less = (i >>> 0 < _tmp$3.length ? _tmp$3[i] : $oob()) < d;
        break;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      less = false;
      break;
    }
  }
  return less ? new_digits - 1 | 0 : new_digits;
}
function _M0MPC28internal7strconv7Decimal11left__shift(self, s) {
  const new_digits = _M0MPC28internal7strconv7Decimal11new__digits(self, s);
  let read_index = self.digits_num;
  let write_index = self.digits_num + new_digits | 0;
  let acc = 0n;
  read_index = read_index - 1 | 0;
  while (true) {
    if (read_index >= 0) {
      const _tmp = self.digits;
      const _tmp$2 = read_index;
      const _p = _tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob();
      const d = BigInt.asUintN(64, BigInt(_p));
      acc = BigInt.asUintN(64, acc + BigInt.asUintN(64, d << BigInt(s & 63)));
      if (10n === 0n) {
        $panic();
      }
      const quo = BigInt.asUintN(64, BigInt.asIntN(64, acc) / BigInt.asIntN(64, 10n));
      const rem = Number(BigInt.asIntN(32, BigInt.asUintN(64, acc - BigInt.asUintN(64, quo * 10n)))) | 0;
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp$3 = self.digits;
        const _tmp$4 = write_index;
        if (_tmp$4 >>> 0 < _tmp$3.length) {
          _tmp$3[_tmp$4] = rem & 255;
        } else {
          $oob();
        }
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      read_index = read_index - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (BigInt.asIntN(64, acc) > BigInt.asIntN(64, 0n)) {
      if (10n === 0n) {
        $panic();
      }
      const quo = BigInt.asUintN(64, BigInt.asIntN(64, acc) / BigInt.asIntN(64, 10n));
      const rem = Number(BigInt.asIntN(32, BigInt.asUintN(64, acc - BigInt.asUintN(64, 10n * quo)))) | 0;
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp = self.digits;
        const _tmp$2 = write_index;
        if (_tmp$2 >>> 0 < _tmp.length) {
          _tmp[_tmp$2] = rem & 255;
        } else {
          $oob();
        }
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      continue;
    } else {
      break;
    }
  }
  self.digits_num = self.digits_num + new_digits | 0;
  if (self.digits_num > self.digits.length) {
    self.digits_num = self.digits.length;
  }
  self.decimal_point = self.decimal_point + new_digits | 0;
  _M0MPC28internal7strconv7Decimal4trim(self);
}
function _M0MPC28internal7strconv7Decimal12right__shift(self, s) {
  let read_index = 0;
  let write_index = 0;
  let acc = 0n;
  while (true) {
    if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63))) === BigInt.asUintN(64, 0n)) {
      if (read_index >= self.digits_num) {
        while (true) {
          if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63))) === BigInt.asUintN(64, 0n)) {
            acc = BigInt.asUintN(64, acc * 10n);
            read_index = read_index + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        break;
      }
      const _tmp = self.digits;
      const _tmp$2 = read_index;
      const d = _tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob();
      acc = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + BigInt.asUintN(64, BigInt(d)));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.decimal_point = self.decimal_point - (read_index - 1 | 0) | 0;
  const mask = BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(s & 63)) - 1n);
  while (true) {
    if (read_index < self.digits_num) {
      const out = BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63));
      const _tmp = self.digits;
      const _tmp$2 = write_index;
      if (_tmp$2 >>> 0 < _tmp.length) {
        _tmp[_tmp$2] = (Number(BigInt.asIntN(32, out)) | 0) & 255;
      } else {
        $oob();
      }
      write_index = write_index + 1 | 0;
      acc = BigInt.asUintN(64, acc & mask);
      const _tmp$3 = self.digits;
      const _tmp$4 = read_index;
      const d = _tmp$4 >>> 0 < _tmp$3.length ? _tmp$3[_tmp$4] : $oob();
      acc = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + BigInt.asUintN(64, BigInt(d)));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (BigInt.asUintN(64, acc) > BigInt.asUintN(64, 0n)) {
      const out = BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63));
      if (write_index < self.digits.length) {
        const _tmp = self.digits;
        const _tmp$2 = write_index;
        if (_tmp$2 >>> 0 < _tmp.length) {
          _tmp[_tmp$2] = (Number(BigInt.asIntN(32, out)) | 0) & 255;
        } else {
          $oob();
        }
        write_index = write_index + 1 | 0;
      } else {
        if (BigInt.asUintN(64, out) > BigInt.asUintN(64, 0n)) {
          self.truncated = true;
        }
      }
      acc = BigInt.asUintN(64, acc & mask);
      acc = BigInt.asUintN(64, acc * 10n);
      continue;
    } else {
      break;
    }
  }
  self.digits_num = write_index;
  _M0MPC28internal7strconv7Decimal4trim(self);
}
function _M0MPC28internal7strconv7Decimal11shift__priv(self, s) {
  if (self.digits_num === 0) {
    return undefined;
  }
  let s$2 = s;
  if (s$2 > 0) {
    while (true) {
      if (s$2 > 59) {
        _M0MPC28internal7strconv7Decimal11left__shift(self, 59);
        s$2 = s$2 - 59 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC28internal7strconv7Decimal11left__shift(self, s$2);
  }
  if (s$2 < 0) {
    while (true) {
      if (s$2 < -59) {
        _M0MPC28internal7strconv7Decimal12right__shift(self, 59);
        s$2 = s$2 + 59 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC28internal7strconv7Decimal12right__shift(self, -s$2 | 0);
    return;
  } else {
    return;
  }
}
function _M0MPC28internal7strconv7Decimal16to__double__priv(self) {
  let exponent = 0;
  let mantissa = 0n;
  const effective_dp = self.decimal_point + self.overflowed | 0;
  if (self.digits_num === 0 || effective_dp < -330) {
    mantissa = 0n;
    exponent = _M0FPC28internal7strconv12double__info.bias;
    const bits = _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, self.negative);
    return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok($i64_reinterpret_f64(bits));
  }
  if (self.decimal_point > 310) {
    const _bind = _M0FPC28internal7strconv10range__errGuE();
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
  }
  self.decimal_point = self.decimal_point + self.overflowed | 0;
  while (true) {
    if (self.decimal_point > 0) {
      let n = 0;
      if (self.decimal_point >= _M0FPC28internal7strconv6powtab.length) {
        n = 60;
      } else {
        const _p = self.decimal_point;
        n = _p >>> 0 < _M0FPC28internal7strconv6powtab.length ? _M0FPC28internal7strconv6powtab[_p] : $oob();
      }
      _M0MPC28internal7strconv7Decimal11shift__priv(self, -n | 0);
      exponent = exponent + n | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    let _tmp;
    if (self.decimal_point < 0) {
      _tmp = true;
    } else {
      let _tmp$2;
      if (self.decimal_point === 0) {
        const _tmp$3 = self.digits;
        _tmp$2 = (0 >>> 0 < _tmp$3.length ? _tmp$3[0] : $oob()) < 5;
      } else {
        _tmp$2 = false;
      }
      _tmp = _tmp$2;
    }
    if (_tmp) {
      let n = 0;
      if ((-self.decimal_point | 0) >= _M0FPC28internal7strconv6powtab.length) {
        n = 60;
      } else {
        const _p = -self.decimal_point | 0;
        n = _p >>> 0 < _M0FPC28internal7strconv6powtab.length ? _M0FPC28internal7strconv6powtab[_p] : $oob();
      }
      _M0MPC28internal7strconv7Decimal11shift__priv(self, n);
      exponent = exponent - n | 0;
      continue;
    } else {
      break;
    }
  }
  exponent = exponent - 1 | 0;
  if (exponent < (_M0FPC28internal7strconv12double__info.bias + 1 | 0)) {
    const n = (_M0FPC28internal7strconv12double__info.bias + 1 | 0) - exponent | 0;
    _M0MPC28internal7strconv7Decimal11shift__priv(self, -n | 0);
    exponent = exponent + n | 0;
  }
  if ((exponent - _M0FPC28internal7strconv12double__info.bias | 0) >= ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)) {
    const _bind = _M0FPC28internal7strconv10range__errGuE();
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
  }
  _M0MPC28internal7strconv7Decimal11shift__priv(self, _M0FPC28internal7strconv12double__info.mantissa_bits + 1 | 0);
  mantissa = _M0MPC28internal7strconv7Decimal16rounded__integer(self);
  if (BigInt.asUintN(64, mantissa) === BigInt.asUintN(64, BigInt.asUintN(64, 2n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)))) {
    mantissa = BigInt.asUintN(64, BigInt.asIntN(64, mantissa) >> BigInt(1 & 63));
    exponent = exponent + 1 | 0;
    if ((exponent - _M0FPC28internal7strconv12double__info.bias | 0) >= ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)) {
      const _bind = _M0FPC28internal7strconv10range__errGuE();
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _ok._0;
      } else {
        return _bind;
      }
    }
  }
  if (BigInt.asUintN(64, BigInt.asUintN(64, mantissa & BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)))) === BigInt.asUintN(64, 0n)) {
    exponent = _M0FPC28internal7strconv12double__info.bias;
  }
  const bits = _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, self.negative);
  return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok($i64_reinterpret_f64(bits));
}
function _M0FPC28internal7strconv17pow10__fast__path(exponent) {
  const _p = exponent & 31;
  return _p >>> 0 < _M0FPC28internal7strconv5table.length ? _M0FPC28internal7strconv5table[_p] : $oob();
}
function _M0MPC28internal7strconv6Number14is__fast__path(self) {
  return BigInt.asIntN(64, _M0FPC28internal7strconv25min__exponent__fast__path) <= BigInt.asIntN(64, self.exponent) && (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, _M0FPC28internal7strconv36max__exponent__disguised__fast__path) && (BigInt.asUintN(64, self.mantissa) <= BigInt.asUintN(64, _M0FPC28internal7strconv25max__mantissa__fast__path) && !self.many_digits));
}
function _M0MPC28internal7strconv6Number15try__fast__path(self) {
  if (_M0MPC28internal7strconv6Number14is__fast__path(self)) {
    let value;
    if (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, _M0FPC28internal7strconv25max__exponent__fast__path)) {
      const value$2 = $f64_convert_i64_u(BigInt.asUintN(64, self.mantissa));
      value = BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 0n) ? value$2 / _M0FPC28internal7strconv17pow10__fast__path(-(Number(BigInt.asIntN(32, self.exponent)) | 0) | 0) : value$2 * _M0FPC28internal7strconv17pow10__fast__path(Number(BigInt.asIntN(32, self.exponent)) | 0);
    } else {
      const shift = BigInt.asUintN(64, self.exponent - _M0FPC28internal7strconv25max__exponent__fast__path);
      const _tmp = self.mantissa;
      const _p = Number(BigInt.asIntN(32, shift)) | 0;
      const _bind = _M0FPC28internal7strconv12checked__mul(_tmp, _p >>> 0 < _M0FPC28internal7strconv10int__pow10.length ? _M0FPC28internal7strconv10int__pow10[_p] : $oob());
      if (_bind === undefined) {
        return _M0DTPC16option6OptionGdE4None__;
      } else {
        const _Some = _bind;
        const _mantissa = _Some;
        if (BigInt.asUintN(64, _mantissa) > BigInt.asUintN(64, _M0FPC28internal7strconv25max__mantissa__fast__path)) {
          return _M0DTPC16option6OptionGdE4None__;
        }
        value = $f64_convert_i64_u(BigInt.asUintN(64, _mantissa)) * _M0FPC28internal7strconv17pow10__fast__path(Number(BigInt.asIntN(32, _M0FPC28internal7strconv25max__exponent__fast__path)) | 0);
      }
    }
    if (self.negative) {
      value = -value;
    }
    return new _M0DTPC16option6OptionGdE4Some(value);
  } else {
    return _M0DTPC16option6OptionGdE4None__;
  }
}
function _M0FPC28internal7strconv13parse__double(str) {
  if (!((str.end - str.start | 0) === 0)) {
    if (_M0FPC28internal7strconv17check__underscore(str)) {
      const _bind = _M0FPC28internal7strconv13parse__number(str);
      let _bind$2;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _bind$2 = _ok._0;
      } else {
        return _bind;
      }
      if (_bind$2 === undefined) {
        return _M0FPC28internal7strconv15parse__inf__nan(str);
      } else {
        const _Some = _bind$2;
        const _num = _Some;
        const _bind$3 = _M0MPC28internal7strconv6Number15try__fast__path(_num);
        if (_bind$3.$tag === 1) {
          const _Some$2 = _bind$3;
          const _value = _Some$2._0;
          return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_value);
        } else {
          const fast = _num.many_digits ? _M0FPC16double14not__a__number : _M0FPC28internal7strconv20try__eisel__lemire64(_num.mantissa, _num.exponent, _num.negative);
          if (fast !== fast) {
            const _bind$4 = _M0FPC28internal7strconv20parse__decimal__priv(str);
            let _tmp;
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _tmp = _ok._0;
            } else {
              return _bind$4;
            }
            return _M0MPC28internal7strconv7Decimal16to__double__priv(_tmp);
          } else {
            return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(fast);
          }
        }
      }
    } else {
      return _M0FPC28internal7strconv11syntax__errGdE();
    }
  } else {
    return _M0FPC28internal7strconv11syntax__errGdE();
  }
}
function _M0FPC14json20offset__to__position(input, offset) {
  const _bind = _M0MPC15array9ArrayView21clamped__view_2einnerGkE(_M0MPC16string10StringView11code__units(input), 0, offset);
  const _bind$2 = _bind.end - _bind.start | 0;
  let _tmp = 0;
  let _tmp$2 = 1;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp;
    const line = _tmp$2;
    const column = _tmp$3;
    if (_ < _bind$2) {
      const code_unit = _bind.buf[_bind.start + _ | 0];
      const _p = 10;
      if (code_unit === _p) {
        _tmp = _ + 1 | 0;
        _tmp$2 = line + 1 | 0;
        _tmp$3 = 0;
        continue;
      } else {
        _tmp = _ + 1 | 0;
        _tmp$3 = column + 1 | 0;
        continue;
      }
    } else {
      return new _M0TPC14json8Position(line, column);
    }
  }
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGiE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0MPC14json12ParseContext21lex__skip__whitespace(ctx) {
  const end = ctx.end_offset;
  let _tmp;
  let _tmp$2 = ctx.offset;
  _L: while (true) {
    const offset = _tmp$2;
    if (offset >= end) {
      _tmp = offset;
      break;
    }
    _L$2: {
      const _bind = ctx.input;
      const _bind$2 = _bind.str.charCodeAt(_bind.start + offset | 0);
      switch (_bind$2) {
        case 32: {
          break _L$2;
        }
        case 9: {
          break _L$2;
        }
        case 13: {
          break _L$2;
        }
        case 10: {
          break _L$2;
        }
        default: {
          _tmp = offset;
          break _L;
        }
      }
    }
    _tmp$2 = offset + 1 | 0;
    continue;
  }
  ctx.offset = _tmp;
}
function _M0MPC14json12ParseContext4make(input) {
  return new _M0TPC14json12ParseContext(0, input, input.end - input.start | 0);
}
function _M0MPC14json12ParseContext19expect__ascii__char(ctx, c) {
  if (ctx.offset < ctx.end_offset) {
    const _bind = ctx.input;
    const c1 = _bind.str.charCodeAt(_bind.start + ctx.offset | 0);
    ctx.offset = ctx.offset + 1 | 0;
    return c !== c1 ? _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1) : new _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(undefined);
  } else {
    return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  }
}
function _M0FPC14json12checked__mul(a, b) {
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 0n) || BigInt.asUintN(64, b) === BigInt.asUintN(64, 0n)) {
    return _M0FPC14json12checked__mulN6constrS1676;
  }
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 1n)) {
    return b;
  }
  if (BigInt.asUintN(64, b) === BigInt.asUintN(64, 1n)) {
    return a;
  }
  if ($i64_clz(b) === 0 || $i64_clz(a) === 0) {
    return undefined;
  }
  if (b === 0n) {
    $panic();
  }
  const quotient = BigInt.asUintN(64, BigInt.asUintN(64, 18446744073709551615n) / BigInt.asUintN(64, b));
  return BigInt.asUintN(64, a) > BigInt.asUintN(64, quotient) ? undefined : BigInt.asUintN(64, a * b);
}
function _M0FPC14json23json__pow10__fast__path(exponent) {
  const _p = exponent & 31;
  return _p >>> 0 < _M0FPC14json12pow10__table.length ? _M0FPC14json12pow10__table[_p] : $oob();
}
function _M0MPC14json14JsonNumberScan17try__fast__double(self) {
  if (BigInt.asUintN(64, self.mantissa) === BigInt.asUintN(64, 0n)) {
    return self.negative ? -0 : 0;
  }
  if (self.many_digits || (BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 18446744073709551594n) || (BigInt.asIntN(64, self.exponent) > BigInt.asIntN(64, 37n) || BigInt.asUintN(64, self.mantissa) > BigInt.asUintN(64, 9007199254740992n)))) {
    return _M0FPC16double14not__a__number;
  }
  let value;
  if (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, 22n)) {
    const value$2 = $f64_convert_i64_u(BigInt.asUintN(64, self.mantissa));
    value = BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 0n) ? value$2 / _M0FPC14json23json__pow10__fast__path(-(Number(BigInt.asIntN(32, self.exponent)) | 0) | 0) : value$2 * _M0FPC14json23json__pow10__fast__path(Number(BigInt.asIntN(32, self.exponent)) | 0);
  } else {
    const shift = BigInt.asUintN(64, self.exponent - 22n);
    const _tmp = self.mantissa;
    const _p = Number(BigInt.asIntN(32, shift)) | 0;
    const _bind = _M0FPC14json12checked__mul(_tmp, _p >>> 0 < _M0FPC14json17int__pow10__table.length ? _M0FPC14json17int__pow10__table[_p] : $oob());
    if (_bind === undefined) {
      return _M0FPC16double14not__a__number;
    } else {
      const _Some = _bind;
      const _mantissa = _Some;
      if (BigInt.asUintN(64, _mantissa) > BigInt.asUintN(64, 9007199254740992n)) {
        return _M0FPC16double14not__a__number;
      }
      value = $f64_convert_i64_u(BigInt.asUintN(64, _mantissa)) * _M0FPC14json23json__pow10__fast__path(22);
    }
  }
  return self.negative ? -value : value;
}
function _M0MPC14json12ParseContext17lex__integer__end(ctx, start, end) {
  const _bind = ctx.input;
  const _p = _bind.str.charCodeAt(_bind.start + start | 0);
  const _p$2 = 45;
  const negative = _p === _p$2;
  const number_start = negative ? start + 1 | 0 : start;
  let _tmp = number_start;
  let _tmp$2 = 0n;
  while (true) {
    const i = _tmp;
    const acc = _tmp$2;
    if (i >= end) {
      const value = negative ? BigInt.asUintN(64, -acc) : acc;
      const _bind$2 = $f64_convert_i64(BigInt.asIntN(64, value));
      const _bind$3 = undefined;
      return new _M0TPC14json11LexedNumber(_bind$3, _bind$2);
    }
    const _bind$2 = ctx.input;
    const digit = BigInt.asUintN(64, BigInt(_bind$2.str.charCodeAt(_bind$2.start + i | 0) - 48 | 0));
    if (10n === 0n) {
      $panic();
    }
    if (BigInt.asIntN(64, acc) > BigInt.asIntN(64, BigInt.asUintN(64, BigInt.asIntN(64, BigInt.asUintN(64, 9007199254740991n - digit)) / BigInt.asIntN(64, 10n)))) {
      const s = _M0MPC16string10StringView12view_2einner(ctx.input, start, end);
      let _try_err;
      _L: {
        const _bind$3 = _M0FPC28internal7strconv13parse__double(s);
        let value;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          value = _ok._0;
        } else {
          const _err = _bind$3;
          _try_err = _err._0;
          break _L;
        }
        const _bind$4 = s;
        return new _M0TPC14json11LexedNumber(_bind$4, value);
      }
      let _tmp$3;
      if (negative) {
        const _bind$3 = s;
        _tmp$3 = new _M0TPC14json11LexedNumber(_bind$3, _M0FPC16double13neg__infinity);
      } else {
        const _bind$3 = s;
        _tmp$3 = new _M0TPC14json11LexedNumber(_bind$3, _M0FPC16double8infinity);
      }
      return _tmp$3;
    }
    _tmp = i + 1 | 0;
    _tmp$2 = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + digit);
    continue;
  }
}
function _M0MPC14json12ParseContext18scan__json__number(ctx, start, end) {
  const _bind = ctx.input;
  const _p = _bind.str.charCodeAt(_bind.start + start | 0);
  const _p$2 = 45;
  const negative = _p === _p$2;
  let has_decimal = false;
  let has_exponent = false;
  let exponent_negative = false;
  let exponent_part = 0n;
  let fractional_digits = 0;
  let mantissa = 0n;
  let significant_digits = 0;
  let seen_nonzero = false;
  const _bind$2 = negative ? start + 1 | 0 : start;
  let _tmp = _bind$2;
  while (true) {
    const i = _tmp;
    if (i < end) {
      _L: {
        _L$2: {
          const _bind$3 = ctx.input;
          const _bind$4 = _bind$3.str.charCodeAt(_bind$3.start + i | 0);
          if (_bind$4 >= 48 && _bind$4 <= 57) {
            const digit = _bind$4 - 48 | 0;
            if (has_exponent) {
              if (BigInt.asIntN(64, exponent_part) < BigInt.asIntN(64, 100000n)) {
                const next_exponent = BigInt.asUintN(64, BigInt.asUintN(64, exponent_part * 10n) + BigInt.asUintN(64, BigInt(digit)));
                exponent_part = BigInt.asIntN(64, next_exponent) > BigInt.asIntN(64, 100000n) ? 100000n : next_exponent;
              }
            } else {
              if (has_decimal) {
                fractional_digits = fractional_digits + 1 | 0;
              }
              if (digit !== 0 || seen_nonzero) {
                seen_nonzero = true;
                significant_digits = significant_digits + 1 | 0;
                if (significant_digits <= 19) {
                  mantissa = BigInt.asUintN(64, BigInt.asUintN(64, mantissa * 10n) + BigInt.asUintN(64, BigInt(digit >>> 0)));
                }
              }
            }
          } else {
            if (_bind$4 === 46) {
              has_decimal = true;
            } else {
              if (_bind$4 === 101) {
                break _L$2;
              } else {
                if (_bind$4 === 69) {
                  break _L$2;
                }
              }
            }
          }
          break _L;
        }
        has_exponent = true;
        if ((i + 1 | 0) < end) {
          const _bind$3 = ctx.input;
          const next = _bind$3.str.charCodeAt(_bind$3.start + (i + 1 | 0) | 0);
          const _p$3 = 45;
          if (next === _p$3) {
            exponent_negative = true;
          }
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const exponent_part$2 = exponent_negative ? BigInt.asUintN(64, -exponent_part) : exponent_part;
  return new _M0TPC14json14JsonNumberScan(negative, !has_decimal && !has_exponent, mantissa, BigInt.asUintN(64, exponent_part$2 - BigInt.asUintN(64, BigInt(fractional_digits))), significant_digits > 19);
}
function _M0MPC14json12ParseContext16lex__number__end(ctx, start, end) {
  const scan = _M0MPC14json12ParseContext18scan__json__number(ctx, start, end);
  if (scan.is_integer) {
    if (!scan.many_digits && (BigInt.asUintN(64, scan.exponent) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, scan.mantissa) <= BigInt.asUintN(64, 9007199254740991n))) {
      const v = $f64_convert_i64(BigInt.asIntN(64, scan.mantissa));
      const value = scan.negative ? -v : v;
      const _bind = undefined;
      return new _M0TPC14json11LexedNumber(_bind, value);
    }
    return _M0MPC14json12ParseContext17lex__integer__end(ctx, start, end);
  }
  const fast = _M0MPC14json14JsonNumberScan17try__fast__double(scan);
  if (!(fast !== fast)) {
    const _bind = undefined;
    return new _M0TPC14json11LexedNumber(_bind, fast);
  }
  if (!scan.many_digits) {
    const fast$2 = _M0FPC28internal7strconv20try__eisel__lemire64(scan.mantissa, scan.exponent, scan.negative);
    if (!(fast$2 !== fast$2)) {
      const _bind = undefined;
      return new _M0TPC14json11LexedNumber(_bind, fast$2);
    }
  }
  const s = _M0MPC16string10StringView12view_2einner(ctx.input, start, end);
  let _try_err;
  _L: {
    const _bind = _M0FPC28internal7strconv13parse__double(s);
    let d;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      d = _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    const _bind$2 = undefined;
    return new _M0TPC14json11LexedNumber(_bind$2, d);
  }
  if (scan.negative) {
    const _bind = s;
    return new _M0TPC14json11LexedNumber(_bind, _M0FPC16double13neg__infinity);
  } else {
    const _bind = s;
    return new _M0TPC14json11LexedNumber(_bind, _M0FPC16double8infinity);
  }
}
function _M0MPC14json12ParseContext10read__char(ctx) {
  if (ctx.offset < ctx.end_offset) {
    const _bind = ctx.input;
    const c1 = _bind.str.charCodeAt(_bind.start + ctx.offset | 0);
    ctx.offset = ctx.offset + 1 | 0;
    if (c1 >= 55296 && c1 <= 56319) {
      if (ctx.offset < ctx.end_offset) {
        const _bind$2 = ctx.input;
        const c2 = _bind$2.str.charCodeAt(_bind$2.start + ctx.offset | 0);
        if (c2 >= 56320 && c2 <= 57343) {
          ctx.offset = ctx.offset + 1 | 0;
          const c3 = ((c1 << 10) + c2 | 0) - 56613888 | 0;
          return c3;
        }
      }
    }
    return c1;
  } else {
    return -1;
  }
}
function _M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start) {
  while (true) {
    const _bind = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind === -1) {
      return _M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset);
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (_x >= 48 && _x <= 57) {
        continue;
      } else {
        ctx.offset = ctx.offset - 1 | 0;
        return _M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset);
      }
    }
  }
}
function _M0MPC14json12ParseContext28lex__decimal__exponent__sign(ctx, start) {
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x >= 48 && _x <= 57) {
      return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start));
    } else {
      ctx.offset = ctx.offset - 1 | 0;
      return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
    }
  }
}
function _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start) {
  _L: {
    const _bind = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind === -1) {
      return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (_x === 43) {
        break _L;
      } else {
        if (_x === 45) {
          break _L;
        } else {
          if (_x >= 48 && _x <= 57) {
            return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start));
          } else {
            ctx.offset = ctx.offset - 1 | 0;
            return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
          }
        }
      }
    }
  }
  const _bind = _M0MPC14json12ParseContext28lex__decimal__exponent__sign(ctx, start);
  let _tmp;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp = _ok._0;
  } else {
    return _bind;
  }
  return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0MPC14json12ParseContext22lex__decimal__fraction(ctx, start) {
  while (true) {
    _L: {
      const _bind = _M0MPC14json12ParseContext10read__char(ctx);
      if (_bind === -1) {
        return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
      } else {
        const _Some = _bind;
        const _x = _Some;
        if (_x === 101) {
          break _L;
        } else {
          if (_x === 69) {
            break _L;
          } else {
            if (_x >= 48 && _x <= 57) {
              continue;
            } else {
              ctx.offset = ctx.offset - 1 | 0;
              return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
            }
          }
        }
      }
    }
    const _bind = _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
  }
}
function _M0MPC14json12ParseContext19lex__decimal__point(ctx, start) {
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    return _x >= 48 && _x <= 57 ? _M0MPC14json12ParseContext22lex__decimal__fraction(ctx, start) : _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
  }
}
function _M0MPC14json12ParseContext21lex__decimal__integer(ctx, start) {
  while (true) {
    _L: {
      const _bind = _M0MPC14json12ParseContext10read__char(ctx);
      if (_bind === -1) {
        return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
      } else {
        const _Some = _bind;
        const _x = _Some;
        if (_x === 46) {
          const _bind$2 = _M0MPC14json12ParseContext19lex__decimal__point(ctx, start);
          let _tmp;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _tmp = _ok._0;
          } else {
            return _bind$2;
          }
          return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
        } else {
          if (_x === 101) {
            break _L;
          } else {
            if (_x === 69) {
              break _L;
            } else {
              if (_x >= 48 && _x <= 57) {
                continue;
              } else {
                ctx.offset = ctx.offset - 1 | 0;
                return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
              }
            }
          }
        }
      }
    }
    const _bind = _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
  }
}
function _M0MPC14json12ParseContext16lex__hex__digits(ctx, n) {
  let _tmp;
  let _tmp$2 = 0;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$2;
    const r = _tmp$3;
    if (_ < n) {
      const _bind = _M0MPC14json12ParseContext10read__char(ctx);
      let d;
      if (_bind === -1) {
        return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
      } else {
        const _Some = _bind;
        const _x = _Some;
        if (_x >= 48 && _x <= 57) {
          d = _x - 48 | 0;
        } else {
          if (_x >= 65 && _x <= 70) {
            d = (_x - 65 | 0) + 10 | 0;
          } else {
            if (_x >= 97 && _x <= 102) {
              d = (_x - 97 | 0) + 10 | 0;
            } else {
              const _p = _x;
              const _bind$2 = _M0MPC14json12ParseContext21invalid__char_2einnerGiE(ctx, -(_p <= 65535 ? 1 : 2) | 0);
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                d = _ok._0;
              } else {
                return _bind$2;
              }
            }
          }
        }
      }
      _tmp$2 = _ + 1 | 0;
      _tmp$3 = r << 4 | d;
      continue;
    } else {
      _tmp = r;
      break;
    }
  }
  return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start) {
  return _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, escape_start - ctx.offset | 0);
}
function _M0MPC14json12ParseContext17lex__string__slow(ctx, run_start) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  let start = run_start;
  const end = ctx.end_offset;
  let _tmp = ctx.offset;
  while (true) {
    const i = _tmp;
    if (i < end) {
      const _bind = ctx.input;
      const c = _bind.str.charCodeAt(_bind.start + i | 0);
      const _p = 34;
      if (c === _p) {
        ctx.offset = i + 1 | 0;
        if (start > 0 && i > start) {
          _M0IPB13StringBuilderPB6Logger11write__view(buf, _M0MPC16string10StringView21clamped__view_2einner(ctx.input, start, i));
        }
        break;
      } else {
        const _p$2 = 92;
        if (c === _p$2) {
          ctx.offset = i + 1 | 0;
          if (start > 0 && i > start) {
            _M0IPB13StringBuilderPB6Logger11write__view(buf, _M0MPC16string10StringView21clamped__view_2einner(ctx.input, start, i));
          }
          const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
          if (_bind$2 === -1) {
            return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
          } else {
            const _Some = _bind$2;
            const _x = _Some;
            switch (_x) {
              case 98: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 8);
                break;
              }
              case 102: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 12);
                break;
              }
              case 110: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 10);
                break;
              }
              case 114: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 13);
                break;
              }
              case 116: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 9);
                break;
              }
              case 34: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
                break;
              }
              case 92: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 92);
                break;
              }
              case 47: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 47);
                break;
              }
              case 117: {
                const escape_start = ctx.offset - 2 | 0;
                const _bind$3 = _M0MPC14json12ParseContext16lex__hex__digits(ctx, 4);
                let c$2;
                if (_bind$3.$tag === 1) {
                  const _ok = _bind$3;
                  c$2 = _ok._0;
                } else {
                  return _bind$3;
                }
                if (c$2 >= 55296 && c$2 <= 56319) {
                  const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
                  if (_bind$4 === -1) {
                    return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
                  } else {
                    const _Some$2 = _bind$4;
                    const _x$2 = _Some$2;
                    if (_x$2 === 92) {
                    } else {
                      const _bind$5 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                      if (_bind$5.$tag === 1) {
                        const _ok = _bind$5;
                        _ok._0;
                      } else {
                        return _bind$5;
                      }
                    }
                  }
                  const _bind$5 = _M0MPC14json12ParseContext10read__char(ctx);
                  if (_bind$5 === -1) {
                    return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
                  } else {
                    const _Some$2 = _bind$5;
                    const _x$2 = _Some$2;
                    if (_x$2 === 117) {
                    } else {
                      const _bind$6 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                      if (_bind$6.$tag === 1) {
                        const _ok = _bind$6;
                        _ok._0;
                      } else {
                        return _bind$6;
                      }
                    }
                  }
                  const _bind$6 = _M0MPC14json12ParseContext16lex__hex__digits(ctx, 4);
                  let c2;
                  if (_bind$6.$tag === 1) {
                    const _ok = _bind$6;
                    c2 = _ok._0;
                  } else {
                    return _bind$6;
                  }
                  if (c2 >= 56320 && c2 <= 57343) {
                    const combined = ((c$2 << 10) + c2 | 0) - 56613888 | 0;
                    _M0IPB13StringBuilderPB6Logger11write__char(buf, combined);
                  } else {
                    const _bind$7 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                    if (_bind$7.$tag === 1) {
                      const _ok = _bind$7;
                      _ok._0;
                    } else {
                      return _bind$7;
                    }
                  }
                } else {
                  if (c$2 >= 56320 && c$2 <= 57343) {
                    const _bind$4 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                    if (_bind$4.$tag === 1) {
                      const _ok = _bind$4;
                      _ok._0;
                    } else {
                      return _bind$4;
                    }
                  } else {
                    _M0IPB13StringBuilderPB6Logger11write__char(buf, c$2);
                  }
                }
                break;
              }
              default: {
                const _p$3 = _x;
                const _bind$4 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -(_p$3 <= 65535 ? 1 : 2) | 0);
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _ok._0;
                } else {
                  return _bind$4;
                }
              }
            }
          }
          start = ctx.offset;
          _tmp = ctx.offset;
          continue;
        } else {
          if (c < 32) {
            ctx.offset = i + 1 | 0;
            const _bind$2 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _ok._0;
            } else {
              return _bind$2;
            }
          } else {
            _tmp = i + 1 | 0;
            continue;
          }
        }
      }
    } else {
      return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
    }
    continue;
  }
  return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(buf.val);
}
function _M0MPC14json12ParseContext11lex__string(ctx) {
  const string_start = ctx.offset;
  const end = ctx.end_offset;
  let _tmp = string_start;
  while (true) {
    const i = _tmp;
    if (i < end) {
      const _bind = ctx.input;
      const c = _bind.str.charCodeAt(_bind.start + i | 0);
      const _p = 34;
      if (c === _p) {
        ctx.offset = i + 1 | 0;
        const _p$2 = ctx.input;
        const base = _p$2.start;
        const _p$3 = ctx.input;
        return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(_p$3.str.substring(base + string_start | 0, base + i | 0));
      } else {
        const _p$2 = 92;
        if (c === _p$2) {
          ctx.offset = i;
          const _bind$2 = _M0MPC14json12ParseContext17lex__string__slow(ctx, string_start);
          let _tmp$2;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _tmp$2 = _ok._0;
          } else {
            return _bind$2;
          }
          return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(_tmp$2);
        } else {
          if (c < 32) {
            ctx.offset = i + 1 | 0;
            const _bind$2 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _ok._0;
            } else {
              return _bind$2;
            }
          }
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
}
function _M0MPC14json12ParseContext9lex__zero(ctx, start) {
  _L: {
    const _bind = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind === -1) {
      return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (_x === 46) {
        return _M0MPC14json12ParseContext19lex__decimal__point(ctx, start);
      } else {
        if (_x === 101) {
          break _L;
        } else {
          if (_x === 69) {
            break _L;
          } else {
            if (_x >= 48 && _x <= 57) {
              ctx.offset = ctx.offset - 1 | 0;
              return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
            } else {
              ctx.offset = ctx.offset - 1 | 0;
              return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
            }
          }
        }
      }
    }
  }
  return _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
}
function _M0MPC14json12ParseContext10lex__value(ctx, allow_rbracket) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x === 123) {
      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6LBrace__);
    } else {
      if (_x === 91) {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8LBracket__);
      } else {
        if (_x === 93) {
          if (allow_rbracket) {
            return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8RBracket__);
          } else {
            return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
          }
        } else {
          if (_x === 110) {
            const _bind$2 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 117);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _ok._0;
            } else {
              return _bind$2;
            }
            const _bind$3 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _ok._0;
            } else {
              return _bind$3;
            }
            const _bind$4 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _ok._0;
            } else {
              return _bind$4;
            }
            return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token4Null__);
          } else {
            if (_x === 116) {
              const _bind$2 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 114);
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _ok._0;
              } else {
                return _bind$2;
              }
              const _bind$3 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 117);
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _ok._0;
              } else {
                return _bind$3;
              }
              const _bind$4 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 101);
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _ok._0;
              } else {
                return _bind$4;
              }
              return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token4True__);
            } else {
              if (_x === 102) {
                const _bind$2 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 97);
                if (_bind$2.$tag === 1) {
                  const _ok = _bind$2;
                  _ok._0;
                } else {
                  return _bind$2;
                }
                const _bind$3 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
                if (_bind$3.$tag === 1) {
                  const _ok = _bind$3;
                  _ok._0;
                } else {
                  return _bind$3;
                }
                const _bind$4 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 115);
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _ok._0;
                } else {
                  return _bind$4;
                }
                const _bind$5 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 101);
                if (_bind$5.$tag === 1) {
                  const _ok = _bind$5;
                  _ok._0;
                } else {
                  return _bind$5;
                }
                return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5False__);
              } else {
                if (_x === 45) {
                  const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
                  if (_bind$2 === -1) {
                    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
                  } else {
                    const _Some$2 = _bind$2;
                    const _x$2 = _Some$2;
                    if (_x$2 === 48) {
                      const _bind$3 = _M0MPC14json12ParseContext9lex__zero(ctx, ctx.offset - 2 | 0);
                      let _bind$4;
                      if (_bind$3.$tag === 1) {
                        const _ok = _bind$3;
                        _bind$4 = _ok._0;
                      } else {
                        return _bind$3;
                      }
                      const _n = _bind$4.value;
                      const _repr = _bind$4.repr;
                      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                    } else {
                      if (_x$2 >= 49 && _x$2 <= 57) {
                        const _bind$3 = _M0MPC14json12ParseContext21lex__decimal__integer(ctx, ctx.offset - 2 | 0);
                        let _bind$4;
                        if (_bind$3.$tag === 1) {
                          const _ok = _bind$3;
                          _bind$4 = _ok._0;
                        } else {
                          return _bind$3;
                        }
                        const _n = _bind$4.value;
                        const _repr = _bind$4.repr;
                        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                      } else {
                        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
                      }
                    }
                  }
                } else {
                  if (_x === 48) {
                    const _bind$2 = _M0MPC14json12ParseContext9lex__zero(ctx, ctx.offset - 1 | 0);
                    let _bind$3;
                    if (_bind$2.$tag === 1) {
                      const _ok = _bind$2;
                      _bind$3 = _ok._0;
                    } else {
                      return _bind$2;
                    }
                    const _n = _bind$3.value;
                    const _repr = _bind$3.repr;
                    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                  } else {
                    if (_x >= 49 && _x <= 57) {
                      const _bind$2 = _M0MPC14json12ParseContext21lex__decimal__integer(ctx, ctx.offset - 1 | 0);
                      let _bind$3;
                      if (_bind$2.$tag === 1) {
                        const _ok = _bind$2;
                        _bind$3 = _ok._0;
                      } else {
                        return _bind$2;
                      }
                      const _n = _bind$3.value;
                      const _repr = _bind$3.repr;
                      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                    } else {
                      if (_x === 34) {
                        const _bind$2 = _M0MPC14json12ParseContext11lex__string(ctx);
                        let s;
                        if (_bind$2.$tag === 1) {
                          const _ok = _bind$2;
                          s = _ok._0;
                        } else {
                          return _bind$2;
                        }
                        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
                      } else {
                        const _p = _x;
                        const shift = -(_p <= 65535 ? 1 : 2) | 0;
                        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, shift);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function _M0MPC14json12ParseContext24lex__after__array__value(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    switch (_x) {
      case 93: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8RBracket__);
      }
      case 44: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5Comma__);
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext25lex__after__object__value(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    switch (_x) {
      case 125: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6RBrace__);
      }
      case 44: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5Comma__);
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext26lex__after__property__name(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x === 58) {
      return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(undefined);
    } else {
      return _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
    }
  }
}
function _M0MPC14json12ParseContext19lex__property__name(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    switch (_x) {
      case 125: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6RBrace__);
      }
      case 34: {
        const _bind$2 = _M0MPC14json12ParseContext11lex__string(ctx);
        let s;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          s = _ok._0;
        } else {
          return _bind$2;
        }
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext20lex__property__name2(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x === 34) {
      const _bind$2 = _M0MPC14json12ParseContext11lex__string(ctx);
      let s;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        s = _ok._0;
      } else {
        return _bind$2;
      }
      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
    } else {
      return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
    }
  }
}
function _M0MPC14json12ParseContext12parse__value(ctx, remaining_available_depth) {
  const _bind = _M0MPC14json12ParseContext10lex__value(ctx, false);
  let tok;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    tok = _ok._0;
  } else {
    return _bind;
  }
  return _M0MPC14json12ParseContext13parse__value2(ctx, tok, remaining_available_depth);
}
function _M0MPC14json12ParseContext13parse__value2(ctx, tok, remaining_available_depth) {
  _L: {
    switch (tok.$tag) {
      case 0: {
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0FPB4null);
      }
      case 1: {
        const _p = true;
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_p ? _M0DTPB4Json4True__ : _M0DTPB4Json5False__);
      }
      case 2: {
        const _p$2 = false;
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_p$2 ? _M0DTPB4Json4True__ : _M0DTPB4Json5False__);
      }
      case 3: {
        const _Number = tok;
        const _n = _Number._0;
        const _repr = _Number._1;
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(new _M0DTPB4Json6Number(_n, _repr));
      }
      case 4: {
        const _String = tok;
        const _s = _String._0;
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(new _M0DTPB4Json6String(_s));
      }
      case 5: {
        return _M0MPC14json12ParseContext13parse__object(ctx, remaining_available_depth);
      }
      case 7: {
        return _M0MPC14json12ParseContext12parse__array(ctx, remaining_available_depth);
      }
      case 8: {
        break _L;
      }
      case 6: {
        break _L;
      }
      default: {
        break _L;
      }
    }
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok($panic());
}
function _M0MPC14json12ParseContext12parse__array(ctx, remaining_available_depth) {
  if (remaining_available_depth <= 0) {
    return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__);
  }
  const child_remaining_available_depth = remaining_available_depth - 1 | 0;
  const vec = [];
  let _tmp;
  const _bind = _M0MPC14json12ParseContext10lex__value(ctx, true);
  let _tmp$2;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp$2 = _ok._0;
  } else {
    return _bind;
  }
  let _tmp$3 = _tmp$2;
  _L: while (true) {
    const x = _tmp$3;
    if (x.$tag === 8) {
      _tmp = new _M0DTPB4Json5Array(vec);
      break;
    } else {
      const _bind$2 = _M0MPC14json12ParseContext13parse__value2(ctx, x, child_remaining_available_depth);
      let _tmp$4;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$4 = _ok._0;
      } else {
        return _bind$2;
      }
      _M0MPC15array5Array4pushGsE(vec, _tmp$4);
      const _bind$3 = _M0MPC14json12ParseContext24lex__after__array__value(ctx);
      let tok2;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        tok2 = _ok._0;
      } else {
        return _bind$3;
      }
      switch (tok2.$tag) {
        case 9: {
          const _bind$4 = _M0MPC14json12ParseContext10lex__value(ctx, false);
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp$3 = _ok._0;
          } else {
            return _bind$4;
          }
          continue _L;
        }
        case 8: {
          _tmp = new _M0DTPB4Json5Array(vec);
          break _L;
        }
        default: {
          $panic();
        }
      }
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0MPC14json12ParseContext13parse__object(ctx, remaining_available_depth) {
  if (remaining_available_depth <= 0) {
    return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__);
  }
  const child_remaining_available_depth = remaining_available_depth - 1 | 0;
  const _bind = [];
  const map = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 0), undefined);
  let _tmp;
  const _bind$2 = _M0MPC14json12ParseContext19lex__property__name(ctx);
  let _tmp$2;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp$2 = _ok._0;
  } else {
    return _bind$2;
  }
  let _tmp$3 = _tmp$2;
  _L: while (true) {
    const x = _tmp$3;
    switch (x.$tag) {
      case 6: {
        _tmp = new _M0DTPB4Json6Object(map);
        break _L;
      }
      case 4: {
        const _String = x;
        const _name = _String._0;
        const _bind$3 = _M0MPC14json12ParseContext26lex__after__property__name(ctx);
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _ok._0;
        } else {
          return _bind$3;
        }
        const _bind$4 = _M0MPC14json12ParseContext12parse__value(ctx, child_remaining_available_depth);
        let _tmp$4;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _tmp$4 = _ok._0;
        } else {
          return _bind$4;
        }
        _M0MPB3Map3setGsRPB4JsonE(map, _name, _tmp$4);
        const _bind$5 = _M0MPC14json12ParseContext25lex__after__object__value(ctx);
        let _bind$6;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _bind$6 = _ok._0;
        } else {
          return _bind$5;
        }
        switch (_bind$6.$tag) {
          case 9: {
            const _bind$7 = _M0MPC14json12ParseContext20lex__property__name2(ctx);
            if (_bind$7.$tag === 1) {
              const _ok = _bind$7;
              _tmp$3 = _ok._0;
            } else {
              return _bind$7;
            }
            continue _L;
          }
          case 6: {
            _tmp = new _M0DTPB4Json6Object(map);
            break _L;
          }
          default: {
            $panic();
          }
        }
        break;
      }
      default: {
        $panic();
      }
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0FPC14json13parse_2einner(input, max_nesting_depth) {
  const ctx = _M0MPC14json12ParseContext4make(input);
  const _bind = _M0MPC14json12ParseContext12parse__value(ctx, max_nesting_depth);
  let val;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    val = _ok._0;
  } else {
    return _bind;
  }
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  return ctx.offset >= ctx.end_offset ? new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(val) : _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
}
function _M0FPC14json19needs__escape__unit(code, escape_slash) {
  const _p = 34;
  if (code === _p) {
    return true;
  } else {
    let _tmp;
    const _p$2 = 92;
    if (code === _p$2) {
      _tmp = true;
    } else {
      let _tmp$2;
      if (code < 32) {
        _tmp$2 = true;
      } else {
        let _tmp$3;
        if (escape_slash) {
          const _p$3 = 47;
          _tmp$3 = code === _p$3;
        } else {
          _tmp$3 = false;
        }
        _tmp$2 = _tmp$3;
      }
      _tmp = _tmp$2;
    }
    return _tmp;
  }
}
function _M0FPC14json20need__escape__scalar(str, escape_slash, start, end) {
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < end) {
      if (_M0FPC14json19needs__escape__unit(str.charCodeAt(i), escape_slash)) {
        return true;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FPC14json12need__escape(str, escape_slash) {
  return _M0FPC14json20need__escape__scalar(str, escape_slash, 0, str.length);
}
function _M0FPC14json13write__escape(buf, code) {
  switch (code) {
    case 34: {
      _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\\"");
      return;
    }
    case 92: {
      _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\\\");
      return;
    }
    case 47: {
      _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\/");
      return;
    }
    case 10: {
      _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\n");
      return;
    }
    case 13: {
      _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\r");
      return;
    }
    case 8: {
      _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\b");
      return;
    }
    case 9: {
      _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\t");
      return;
    }
    case 12: {
      _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\f");
      return;
    }
    default: {
      _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\u00");
      _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0MPC14byte4Byte7to__hex(code & 255));
      return;
    }
  }
}
function _M0FPC14json14write__escaped(buf, str, escape_slash) {
  if (!_M0FPC14json12need__escape(str, escape_slash)) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, str);
    return undefined;
  }
  const _bind = str.length;
  let _tmp = 0;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp;
    const run_start = _tmp$2;
    if (i < _bind) {
      const code = str.charCodeAt(i);
      if (_M0FPC14json19needs__escape__unit(code, escape_slash)) {
        _M0IPB13StringBuilderPB6Logger11write__view(buf, _M0MPC16string6String19exact__view_2einner(str, run_start, i));
        _M0FPC14json13write__escape(buf, code);
        _tmp = i + 1 | 0;
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        _tmp = i + 1 | 0;
        continue;
      }
    } else {
      _M0IPB13StringBuilderPB6Logger11write__view(buf, _M0MPC16string6String19exact__view_2einner(str, run_start, undefined));
      return;
    }
  }
}
function _M0FPC14json13write__indent(buf, cache, level, indent) {
  while (true) {
    if (cache.length <= level) {
      if (cache.length >= 1) {
        const _last = cache[cache.length - 1 | 0];
        _M0MPC15array5Array4pushGsE(cache, `${_last}${_M0MPC16string6String6repeat(" ", indent)}`);
      } else {
        _M0MPC15array5Array4pushGsE(cache, "\n");
      }
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0MPC15array5Array2atGsE(cache, level));
}
function _M0MPC14json4Json17stringify_2einner(self, escape_slash, indent, replacer) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const indent_cache = [];
  const stack = [];
  let depth = 0;
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      if (stack.length === 0) {
        break;
      } else {
        const _x = stack[stack.length - 1 | 0];
        if (_x.$tag === 0) {
          const _Array = _x;
          const _arr = _Array._0;
          const _i = _Array._1;
          if (_i < _arr.length) {
            const element = _M0MPC15array5Array2atGsE(_arr, _i);
            _Array._1 = _i + 1 | 0;
            if (_i > 0) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 44);
              if (indent > 0) {
                _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
              }
            }
            _tmp = element;
            continue;
          } else {
            depth = depth - 1 | 0;
            _M0MPC15array5Array3popGsE(stack);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 93);
            _tmp = undefined;
            continue;
          }
        } else {
          const _Object = _x;
          const _iterator = _Object._0;
          const _first = _Object._1;
          const _bind = _M0MPB4Iter4nextGRPC16string10StringViewE(_iterator);
          if (_bind === undefined) {
            depth = depth - 1 | 0;
            _M0MPC15array5Array3popGsE(stack);
            if (indent > 0 && !_first) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 125);
            _tmp = undefined;
            continue;
          } else {
            const _Some = _bind;
            const _x$2 = _Some;
            const _k = _x$2._0;
            const _v = _x$2._1;
            let v2 = _v;
            if (replacer === undefined) {
            } else {
              const _Some$2 = replacer;
              const _replacer = _Some$2;
              const _func = _replacer.f;
              const _bind$2 = _func(_k, _v);
              if (_bind$2 === undefined) {
                _tmp = undefined;
                continue;
              } else {
                const _Some$3 = _bind$2;
                const _v$2 = _Some$3;
                v2 = _v$2;
              }
            }
            if (!_first) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 44);
            }
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
            _M0FPC14json14write__escaped(buf, _k, escape_slash);
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 58);
            if (indent > 0) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 32);
            }
            _Object._1 = false;
            _tmp = v2;
            continue;
          }
        }
      }
    } else {
      const _Some = x;
      const _value = _Some;
      switch (_value.$tag) {
        case 6: {
          const _Object = _value;
          const _members = _Object._0;
          if (_members.size === 0) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "{}");
          } else {
            depth = depth + 1 | 0;
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 123);
            _M0MPC15array5Array4pushGsE(stack, new _M0DTPC14json10WriteFrame6Object(_M0MPB3Map4iterGsRPB4JsonE(_members), true));
          }
          break;
        }
        case 5: {
          const _Array = _value;
          const _arr = _Array._0;
          if (_arr.length === 0) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "[]");
          } else {
            depth = depth + 1 | 0;
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 91);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0MPC15array5Array4pushGsE(stack, new _M0DTPC14json10WriteFrame5Array(_arr, 0));
          }
          break;
        }
        case 4: {
          const _String = _value;
          const _s = _String._0;
          _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
          _M0FPC14json14write__escaped(buf, _s, escape_slash);
          _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
          break;
        }
        case 3: {
          const _Number = _value;
          const _n = _Number._0;
          const _repr = _Number._1;
          if (_repr === undefined) {
            _M0MPB13StringBuilder13write__objectGdE(buf, _n);
          } else {
            const _Some$2 = _repr;
            const _r = _Some$2;
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _r);
          }
          break;
        }
        case 1: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "true");
          break;
        }
        case 2: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "false");
          break;
        }
        default: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "null");
        }
      }
      _tmp = undefined;
      continue;
    }
  }
  return buf.val;
}
function _M0IP28BeiLaDuo12cidr_2daudit10RuleActionPB2Eq5equal(_x_715, _x_716) {
  if (_x_715 === 0) {
    if (_x_716 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (_x_716 === 1) {
      return true;
    } else {
      return false;
    }
  }
}
function _M0IP28BeiLaDuo12cidr_2daudit8SeverityPB2Eq5equal(_x_665, _x_666) {
  switch (_x_665) {
    case 0: {
      if (_x_666 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_666 === 1) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_666 === 2) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function _M0MP28BeiLaDuo12cidr_2daudit10RuleAction5label(self) {
  if (self === 0) {
    return "allow";
  } else {
    return "deny";
  }
}
function _M0FP28BeiLaDuo12cidr_2daudit16is__ascii__space(char) {
  return char === 32 || (char === 9 || (char === 13 || char === 10));
}
function _M0FP28BeiLaDuo12cidr_2daudit11trim__ascii(input) {
  const chars = _M0MPC16string6String9to__array(input);
  let start = 0;
  let end = chars.length;
  while (true) {
    if (start < end && _M0FP28BeiLaDuo12cidr_2daudit16is__ascii__space(_M0MPC15array5Array2atGcE(chars, start))) {
      start = start + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (end > start && _M0FP28BeiLaDuo12cidr_2daudit16is__ascii__space(_M0MPC15array5Array2atGcE(chars, end - 1 | 0))) {
      end = end - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPC16string6String11from__array(_M0MPC15array5Array21clamped__view_2einnerGcE(chars, start, end));
}
function _M0MP28BeiLaDuo12cidr_2daudit4IPv410to__dotted(self) {
  const a = self.value >>> 24 & 255;
  const b = self.value >>> 16 & 255;
  const c = self.value >>> 8 & 255;
  const d = self.value & 255;
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(3);
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, a);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ".");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, b);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ".");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, c);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ".");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, d);
  return _string_builder.val;
}
function _M0MP28BeiLaDuo12cidr_2daudit9CidrBlock10to__string(self) {
  return `${_M0MP28BeiLaDuo12cidr_2daudit4IPv410to__dotted(self.network)}/${_M0MPC13int3Int18to__string_2einner(self.prefix, 10)}`;
}
function _M0MP28BeiLaDuo12cidr_2daudit4Rule11new_2einner(id, action, block, source_block, note) {
  return new _M0TP28BeiLaDuo12cidr_2daudit4Rule(id, action, block, source_block, note);
}
function _M0MP28BeiLaDuo12cidr_2daudit4IPv43new(value) {
  return new _M0TP28BeiLaDuo12cidr_2daudit4IPv4(value);
}
function _M0MP28BeiLaDuo12cidr_2daudit9CidrBlock9broadcast(self) {
  const _p = self.network;
  const _tmp = _p.value;
  const _p$2 = self.prefix;
  return _M0MP28BeiLaDuo12cidr_2daudit4IPv43new(_tmp | (_p$2 === 32 ? 0 : -1 >>> _p$2 | 0));
}
function _M0MP28BeiLaDuo12cidr_2daudit9CidrBlock12contains__ip(self, ip) {
  const _tmp = ip.value;
  const _p = self.network;
  if (_tmp >>> 0 >= _p.value >>> 0) {
    const _tmp$2 = ip.value;
    const _p$2 = _M0MP28BeiLaDuo12cidr_2daudit9CidrBlock9broadcast(self);
    return _tmp$2 >>> 0 <= _p$2.value >>> 0;
  } else {
    return false;
  }
}
function _M0MP28BeiLaDuo12cidr_2daudit4Rule7matches(self, ip) {
  return _M0MP28BeiLaDuo12cidr_2daudit9CidrBlock12contains__ip(self.block, ip);
}
function _M0FP28BeiLaDuo12cidr_2daudit13parse__prefix(input) {
  const text = _M0FP28BeiLaDuo12cidr_2daudit11trim__ascii(input);
  const chars = _M0MPC16string6String9to__array(text);
  if (chars.length > 0) {
    let value = 0;
    const _bind = chars.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const char = chars[_];
        const _p = char;
        if (_p >= 48 && _p <= 57) {
          value = (Math.imul(value, 10) | 0) + (char - 48 | 0) | 0;
          if (value <= 32) {
          } else {
            return _M0FP28BeiLaDuo12cidr_2daudit13parse__prefixN6constrS2028;
          }
        } else {
          return new _M0DTPC16result6ResultGisE3Err(`CIDR prefix contains an invalid character: ${input}`);
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGisE2Ok(value);
  } else {
    return _M0FP28BeiLaDuo12cidr_2daudit13parse__prefixN6constrS2029;
  }
}
function _M0MP28BeiLaDuo12cidr_2daudit9CidrBlock14new__unchecked(network, prefix) {
  return new _M0TP28BeiLaDuo12cidr_2daudit9CidrBlock(_M0MP28BeiLaDuo12cidr_2daudit4IPv43new(network.value & (prefix === 0 ? 0 : -1 << (32 - prefix | 0))), prefix);
}
function _M0MP28BeiLaDuo12cidr_2daudit9CidrBlock3new(address, prefix) {
  return prefix >= 0 && prefix <= 32 ? new _M0DTPC16result6ResultGRP28BeiLaDuo12cidr_2daudit9CidrBlocksE2Ok(_M0MP28BeiLaDuo12cidr_2daudit9CidrBlock14new__unchecked(address, prefix)) : _M0MP28BeiLaDuo12cidr_2daudit9CidrBlock3newN6constrS2041;
}
function _M0MP28BeiLaDuo12cidr_2daudit4IPv45parse(input) {
  const text = _M0FP28BeiLaDuo12cidr_2daudit11trim__ascii(input);
  const chars = _M0MPC16string6String9to__array(text);
  if (chars.length > 0) {
    const octets = [];
    let current = 0;
    let digits = 0;
    let dots = 0;
    const _bind = chars.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const char = chars[_];
        const _p = char;
        if (_p >= 48 && _p <= 57) {
          current = (Math.imul(current, 10) | 0) + (char - 48 | 0) | 0;
          digits = digits + 1 | 0;
          if (digits <= 3) {
            if (current <= 255) {
            } else {
              return new _M0DTPC16result6ResultGRP28BeiLaDuo12cidr_2daudit4IPv4sE3Err(`IPv4 octet is greater than 255: ${input}`);
            }
          } else {
            return new _M0DTPC16result6ResultGRP28BeiLaDuo12cidr_2daudit4IPv4sE3Err(`IPv4 octet has too many digits: ${input}`);
          }
        } else {
          if (char === 46) {
            if (digits > 0) {
              _M0MPC15array5Array4pushGiE(octets, current);
              current = 0;
              digits = 0;
              dots = dots + 1 | 0;
              if (dots <= 3) {
              } else {
                return new _M0DTPC16result6ResultGRP28BeiLaDuo12cidr_2daudit4IPv4sE3Err(`IPv4 address has too many dots: ${input}`);
              }
            } else {
              return new _M0DTPC16result6ResultGRP28BeiLaDuo12cidr_2daudit4IPv4sE3Err(`IPv4 dot is not preceded by an octet: ${input}`);
            }
          } else {
            return new _M0DTPC16result6ResultGRP28BeiLaDuo12cidr_2daudit4IPv4sE3Err(`IPv4 address contains an invalid character: ${input}`);
          }
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (digits > 0) {
      _M0MPC15array5Array4pushGiE(octets, current);
      if (octets.length === 4) {
        const value = _M0MPC15array5Array2atGiE(octets, 0) << 24 | _M0MPC15array5Array2atGiE(octets, 1) << 16 | _M0MPC15array5Array2atGiE(octets, 2) << 8 | _M0MPC15array5Array2atGiE(octets, 3);
        return new _M0DTPC16result6ResultGRP28BeiLaDuo12cidr_2daudit4IPv4sE2Ok(_M0MP28BeiLaDuo12cidr_2daudit4IPv43new(value));
      } else {
        return new _M0DTPC16result6ResultGRP28BeiLaDuo12cidr_2daudit4IPv4sE3Err(`IPv4 address must contain four octets: ${input}`);
      }
    } else {
      return new _M0DTPC16result6ResultGRP28BeiLaDuo12cidr_2daudit4IPv4sE3Err(`IPv4 address ends after a dot: ${input}`);
    }
  } else {
    return _M0MP28BeiLaDuo12cidr_2daudit4IPv45parseN6constrS2044;
  }
}
function _M0MP28BeiLaDuo12cidr_2daudit9CidrBlock5parse(input) {
  const text = _M0FP28BeiLaDuo12cidr_2daudit11trim__ascii(input);
  const chars = _M0MPC16string6String9to__array(text);
  if (chars.length > 0) {
    let slash = -1;
    let _tmp = 0;
    while (true) {
      const index = _tmp;
      if (index < chars.length) {
        if (_M0MPC15array5Array2atGcE(chars, index) === 47) {
          if (slash === -1) {
            slash = index;
          } else {
            return new _M0DTPC16result6ResultGRP28BeiLaDuo12cidr_2daudit9CidrBlocksE3Err(`CIDR block contains more than one slash: ${input}`);
          }
        }
        _tmp = index + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (slash === -1) {
      const _bind = _M0MP28BeiLaDuo12cidr_2daudit4IPv45parse(text);
      if (_bind.$tag === 1) {
        const _Ok = _bind;
        const _ip = _Ok._0;
        return _M0MP28BeiLaDuo12cidr_2daudit9CidrBlock3new(_ip, 32);
      } else {
        const _Err = _bind;
        const _err = _Err._0;
        return new _M0DTPC16result6ResultGRP28BeiLaDuo12cidr_2daudit9CidrBlocksE3Err(_err);
      }
    } else {
      const ip_text = _M0MPC16string6String11from__array(_M0MPC15array5Array21clamped__view_2einnerGcE(chars, 0, slash));
      const prefix_text = _M0MPC16string6String11from__array(_M0MPC15array5Array21clamped__view_2einnerGcE(chars, slash + 1 | 0, undefined));
      const _bind = _M0MP28BeiLaDuo12cidr_2daudit4IPv45parse(ip_text);
      if (_bind.$tag === 0) {
        const _Err = _bind;
        const _err = _Err._0;
        return new _M0DTPC16result6ResultGRP28BeiLaDuo12cidr_2daudit9CidrBlocksE3Err(_err);
      } else {
        const _Ok = _bind;
        const _ip = _Ok._0;
        const _bind$2 = _M0FP28BeiLaDuo12cidr_2daudit13parse__prefix(prefix_text);
        if (_bind$2.$tag === 0) {
          const _Err = _bind$2;
          const _err = _Err._0;
          return new _M0DTPC16result6ResultGRP28BeiLaDuo12cidr_2daudit9CidrBlocksE3Err(_err);
        } else {
          const _Ok$2 = _bind$2;
          const _prefix = _Ok$2._0;
          return _M0MP28BeiLaDuo12cidr_2daudit9CidrBlock3new(_ip, _prefix);
        }
      }
    }
  } else {
    return _M0MP28BeiLaDuo12cidr_2daudit9CidrBlock5parseN6constrS2057;
  }
}
function _M0MP28BeiLaDuo12cidr_2daudit8Severity5label(self) {
  switch (self) {
    case 0: {
      return "info";
    }
    case 1: {
      return "warning";
    }
    default: {
      return "critical";
    }
  }
}
function _M0MP28BeiLaDuo12cidr_2daudit9CidrBlock12equal__range(self, other) {
  const _p = self.network;
  const _tmp = _p.value;
  const _p$2 = other.network;
  if (_tmp === _p$2.value) {
    const _p$3 = _M0MP28BeiLaDuo12cidr_2daudit9CidrBlock9broadcast(self);
    const _tmp$2 = _p$3.value;
    const _p$4 = _M0MP28BeiLaDuo12cidr_2daudit9CidrBlock9broadcast(other);
    return _tmp$2 === _p$4.value;
  } else {
    return false;
  }
}
function _M0MP28BeiLaDuo12cidr_2daudit9CidrBlock8overlaps(self, other) {
  const _p = self.network;
  const _tmp = _p.value;
  const _p$2 = _M0MP28BeiLaDuo12cidr_2daudit9CidrBlock9broadcast(other);
  if (_tmp >>> 0 <= _p$2.value >>> 0) {
    const _p$3 = other.network;
    const _tmp$2 = _p$3.value;
    const _p$4 = _M0MP28BeiLaDuo12cidr_2daudit9CidrBlock9broadcast(self);
    return _tmp$2 >>> 0 <= _p$4.value >>> 0;
  } else {
    return false;
  }
}
function _M0MP28BeiLaDuo12cidr_2daudit9CidrBlock10parse__raw(input) {
  const text = _M0FP28BeiLaDuo12cidr_2daudit11trim__ascii(input);
  const chars = _M0MPC16string6String9to__array(text);
  let slash = -1;
  let _tmp = 0;
  while (true) {
    const index = _tmp;
    if (index < chars.length) {
      if (_M0MPC15array5Array2atGcE(chars, index) === 47) {
        slash = index;
      }
      _tmp = index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (slash === -1) {
    const _bind = _M0MP28BeiLaDuo12cidr_2daudit4IPv45parse(text);
    if (_bind.$tag === 1) {
      const _Ok = _bind;
      const _ip = _Ok._0;
      return new _M0DTPC16result6ResultGURP28BeiLaDuo12cidr_2daudit4IPv4iEsE2Ok({ _0: _ip, _1: 32 });
    } else {
      const _Err = _bind;
      const _err = _Err._0;
      return new _M0DTPC16result6ResultGURP28BeiLaDuo12cidr_2daudit4IPv4iEsE3Err(_err);
    }
  } else {
    const _bind = _M0MP28BeiLaDuo12cidr_2daudit4IPv45parse(_M0MPC16string6String11from__array(_M0MPC15array5Array21clamped__view_2einnerGcE(chars, 0, slash)));
    if (_bind.$tag === 0) {
      const _Err = _bind;
      const _err = _Err._0;
      return new _M0DTPC16result6ResultGURP28BeiLaDuo12cidr_2daudit4IPv4iEsE3Err(_err);
    } else {
      const _Ok = _bind;
      const _ip = _Ok._0;
      const _bind$2 = _M0FP28BeiLaDuo12cidr_2daudit13parse__prefix(_M0MPC16string6String11from__array(_M0MPC15array5Array21clamped__view_2einnerGcE(chars, slash + 1 | 0, undefined)));
      if (_bind$2.$tag === 1) {
        const _Ok$2 = _bind$2;
        const _prefix = _Ok$2._0;
        return new _M0DTPC16result6ResultGURP28BeiLaDuo12cidr_2daudit4IPv4iEsE2Ok({ _0: _ip, _1: _prefix });
      } else {
        const _Err = _bind$2;
        const _err = _Err._0;
        return new _M0DTPC16result6ResultGURP28BeiLaDuo12cidr_2daudit4IPv4iEsE3Err(_err);
      }
    }
  }
}
function _M0MP28BeiLaDuo12cidr_2daudit9CidrBlock15has__host__bits(input) {
  const _bind = _M0MP28BeiLaDuo12cidr_2daudit9CidrBlock10parse__raw(input);
  if (_bind.$tag === 1) {
    const _Ok = _bind;
    const _x = _Ok._0;
    const _ip = _x._0;
    const _prefix = _x._1;
    return _ip.value !== (_ip.value & (_prefix === 0 ? 0 : -1 << (32 - _prefix | 0)));
  } else {
    return false;
  }
}
function _M0FP210LuoYunxin19moonnginx9line__msg(line, msg) {
  return `line ${_M0MPC13int3Int18to__string_2einner(line, 10)}: ${msg}`;
}
function _M0FP210LuoYunxin19moonnginx11slice__text(s, start, end) {
  return _M0MPC16string10StringView9to__owned(_M0MPC16string6String21clamped__view_2einner(s, start, end));
}
function _M0FP210LuoYunxin19moonnginx10config__ok(file, parsed) {
  return new _M0TP210LuoYunxin19moonnginx6Config(file, parsed, "ok");
}
function _M0FP210LuoYunxin19moonnginx12cursor__bump(c) {
  if (!(c.i >= c.src.length)) {
    const _tmp = c.src;
    const _tmp$2 = c.i;
    if ((_tmp$2 >>> 0 < _tmp.length ? _tmp.charCodeAt(_tmp$2) : $oob()) === 10) {
      c.line = c.line + 1 | 0;
    }
    c.i = c.i + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0FP210LuoYunxin19moonnginx11cursor__new(src) {
  return new _M0TP210LuoYunxin19moonnginx6Cursor(src, 0, 1);
}
function _M0FP210LuoYunxin19moonnginx12cursor__peek(c) {
  if (c.i >= c.src.length) {
    return -1;
  } else {
    const _tmp = c.src;
    const _tmp$2 = c.i;
    return _tmp$2 >>> 0 < _tmp.length ? _tmp.charCodeAt(_tmp$2) : $oob();
  }
}
function _M0FP210LuoYunxin19moonnginx11lex__quoted(c, quote) {
  const line = c.line;
  _M0FP210LuoYunxin19moonnginx12cursor__bump(c);
  let s = "";
  while (true) {
    if (!(c.i >= c.src.length)) {
      const ch = _M0FP210LuoYunxin19moonnginx12cursor__peek(c);
      if (ch === 92) {
        _M0FP210LuoYunxin19moonnginx12cursor__bump(c);
        if (c.i >= c.src.length) {
          return new _M0DTPC16result6ResultGsRP210LuoYunxin19moonnginx8NgxErrorE3Err(new _M0DTP210LuoYunxin19moonnginx8NgxError12Unterminated(_M0FP210LuoYunxin19moonnginx9line__msg(line, "escape at end of quoted string")));
        }
        const nxt = _M0FP210LuoYunxin19moonnginx12cursor__peek(c);
        if (nxt === quote) {
          s = `${s}${_M0FP210LuoYunxin19moonnginx11slice__text(c.src, c.i, c.i + 1 | 0)}`;
          _M0FP210LuoYunxin19moonnginx12cursor__bump(c);
        } else {
          s = `${s}\\${_M0FP210LuoYunxin19moonnginx11slice__text(c.src, c.i, c.i + 1 | 0)}`;
          _M0FP210LuoYunxin19moonnginx12cursor__bump(c);
        }
        continue;
      }
      if (ch === quote) {
        _M0FP210LuoYunxin19moonnginx12cursor__bump(c);
        return new _M0DTPC16result6ResultGsRP210LuoYunxin19moonnginx8NgxErrorE2Ok(s);
      }
      s = `${s}${_M0FP210LuoYunxin19moonnginx11slice__text(c.src, c.i, c.i + 1 | 0)}`;
      _M0FP210LuoYunxin19moonnginx12cursor__bump(c);
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGsRP210LuoYunxin19moonnginx8NgxErrorE3Err(new _M0DTP210LuoYunxin19moonnginx8NgxError12Unterminated(_M0FP210LuoYunxin19moonnginx9line__msg(line, "quoted string")));
}
function _M0FP210LuoYunxin19moonnginx6is__ws(ch) {
  return ch === 32 || (ch === 9 || (ch === 10 || ch === 13));
}
function _M0FP210LuoYunxin19moonnginx9lex__word(c) {
  const start_line = c.line;
  let s = "";
  while (true) {
    if (!(c.i >= c.src.length)) {
      const ch = _M0FP210LuoYunxin19moonnginx12cursor__peek(c);
      if (_M0FP210LuoYunxin19moonnginx6is__ws(ch) || (ch === 123 || (ch === 125 || ch === 59))) {
        break;
      }
      if (ch === 35 && s === "") {
        break;
      }
      if (ch === 34 || ch === 39) {
        if (s === "") {
          break;
        }
        s = `${s}${_M0FP210LuoYunxin19moonnginx11slice__text(c.src, c.i, c.i + 1 | 0)}`;
        _M0FP210LuoYunxin19moonnginx12cursor__bump(c);
        continue;
      }
      if (ch === 92) {
        _M0FP210LuoYunxin19moonnginx12cursor__bump(c);
        if (c.i >= c.src.length) {
          return new _M0DTPC16result6ResultGsRP210LuoYunxin19moonnginx8NgxErrorE3Err(new _M0DTP210LuoYunxin19moonnginx8NgxError12Unterminated(_M0FP210LuoYunxin19moonnginx9line__msg(start_line, "escape at end of word")));
        }
        s = `${s}\\${_M0FP210LuoYunxin19moonnginx11slice__text(c.src, c.i, c.i + 1 | 0)}`;
        _M0FP210LuoYunxin19moonnginx12cursor__bump(c);
        continue;
      }
      if (ch === 36) {
        s = `${s}$`;
        _M0FP210LuoYunxin19moonnginx12cursor__bump(c);
        if (_M0FP210LuoYunxin19moonnginx12cursor__peek(c) === 123) {
          s = `${s}{`;
          _M0FP210LuoYunxin19moonnginx12cursor__bump(c);
          while (true) {
            if (!(c.i >= c.src.length)) {
              const inner = _M0FP210LuoYunxin19moonnginx12cursor__peek(c);
              s = `${s}${_M0FP210LuoYunxin19moonnginx11slice__text(c.src, c.i, c.i + 1 | 0)}`;
              _M0FP210LuoYunxin19moonnginx12cursor__bump(c);
              if (inner === 125) {
                break;
              }
              continue;
            } else {
              break;
            }
          }
        }
        continue;
      }
      s = `${s}${_M0FP210LuoYunxin19moonnginx11slice__text(c.src, c.i, c.i + 1 | 0)}`;
      _M0FP210LuoYunxin19moonnginx12cursor__bump(c);
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGsRP210LuoYunxin19moonnginx8NgxErrorE2Ok(s);
}
function _M0FP210LuoYunxin19moonnginx8skip__ws(c) {
  while (true) {
    if (!(c.i >= c.src.length) && _M0FP210LuoYunxin19moonnginx6is__ws(_M0FP210LuoYunxin19moonnginx12cursor__peek(c))) {
      _M0FP210LuoYunxin19moonnginx12cursor__bump(c);
      continue;
    } else {
      return;
    }
  }
}
function _M0FP210LuoYunxin19moonnginx12tok__comment(value, line) {
  return new _M0TP210LuoYunxin19moonnginx3Tok(5, value, line);
}
function _M0FP210LuoYunxin19moonnginx11tok__lbrace(line) {
  return new _M0TP210LuoYunxin19moonnginx3Tok(2, "{", line);
}
function _M0FP210LuoYunxin19moonnginx11tok__quoted(value, line) {
  return new _M0TP210LuoYunxin19moonnginx3Tok(1, value, line);
}
function _M0FP210LuoYunxin19moonnginx11tok__rbrace(line) {
  return new _M0TP210LuoYunxin19moonnginx3Tok(3, "}", line);
}
function _M0FP210LuoYunxin19moonnginx9tok__semi(line) {
  return new _M0TP210LuoYunxin19moonnginx3Tok(4, ";", line);
}
function _M0FP210LuoYunxin19moonnginx9tok__word(value, line) {
  return new _M0TP210LuoYunxin19moonnginx3Tok(0, value, line);
}
function _M0FP210LuoYunxin19moonnginx9lex__conf(src) {
  const c = _M0FP210LuoYunxin19moonnginx11cursor__new(src);
  const toks = [];
  let depth = 0;
  while (true) {
    if (!(c.i >= c.src.length)) {
      _M0FP210LuoYunxin19moonnginx8skip__ws(c);
      if (c.i >= c.src.length) {
        break;
      }
      const line = c.line;
      const ch = _M0FP210LuoYunxin19moonnginx12cursor__peek(c);
      if (ch === 35) {
        _M0FP210LuoYunxin19moonnginx12cursor__bump(c);
        const start = c.i;
        while (true) {
          let _tmp;
          if (!(c.i >= c.src.length)) {
            const _p = _M0FP210LuoYunxin19moonnginx12cursor__peek(c);
            _tmp = !(_p === 10);
          } else {
            _tmp = false;
          }
          if (_tmp) {
            _M0FP210LuoYunxin19moonnginx12cursor__bump(c);
            continue;
          } else {
            break;
          }
        }
        _M0MPC15array5Array4pushGsE(toks, _M0FP210LuoYunxin19moonnginx12tok__comment(_M0FP210LuoYunxin19moonnginx11slice__text(src, start, c.i), line));
        continue;
      }
      if (ch === 34 || ch === 39) {
        const _bind = _M0FP210LuoYunxin19moonnginx11lex__quoted(c, ch);
        if (_bind.$tag === 1) {
          const _Ok = _bind;
          const _s = _Ok._0;
          _M0MPC15array5Array4pushGsE(toks, _M0FP210LuoYunxin19moonnginx11tok__quoted(_s, line));
        } else {
          const _Err = _bind;
          const _e = _Err._0;
          return new _M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx3TokERP210LuoYunxin19moonnginx8NgxErrorE3Err(_e);
        }
        continue;
      }
      if (ch === 123) {
        depth = depth + 1 | 0;
        _M0FP210LuoYunxin19moonnginx12cursor__bump(c);
        _M0MPC15array5Array4pushGsE(toks, _M0FP210LuoYunxin19moonnginx11tok__lbrace(line));
        continue;
      }
      if (ch === 125) {
        depth = depth - 1 | 0;
        if (depth < 0) {
          return new _M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx3TokERP210LuoYunxin19moonnginx8NgxErrorE3Err(new _M0DTP210LuoYunxin19moonnginx8NgxError10Unexpected(_M0FP210LuoYunxin19moonnginx9line__msg(line, "unexpected }")));
        }
        _M0FP210LuoYunxin19moonnginx12cursor__bump(c);
        _M0MPC15array5Array4pushGsE(toks, _M0FP210LuoYunxin19moonnginx11tok__rbrace(line));
        continue;
      }
      if (ch === 59) {
        _M0FP210LuoYunxin19moonnginx12cursor__bump(c);
        _M0MPC15array5Array4pushGsE(toks, _M0FP210LuoYunxin19moonnginx9tok__semi(line));
        continue;
      }
      const _bind = _M0FP210LuoYunxin19moonnginx9lex__word(c);
      if (_bind.$tag === 1) {
        const _Ok = _bind;
        const _w = _Ok._0;
        if (_w === "") {
          return new _M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx3TokERP210LuoYunxin19moonnginx8NgxErrorE3Err(new _M0DTP210LuoYunxin19moonnginx8NgxError6Syntax(_M0FP210LuoYunxin19moonnginx9line__msg(line, "empty token")));
        }
        _M0MPC15array5Array4pushGsE(toks, _M0FP210LuoYunxin19moonnginx9tok__word(_w, line));
      } else {
        const _Err = _bind;
        const _e = _Err._0;
        return new _M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx3TokERP210LuoYunxin19moonnginx8NgxErrorE3Err(_e);
      }
      continue;
    } else {
      break;
    }
  }
  if (depth > 0) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx3TokERP210LuoYunxin19moonnginx8NgxErrorE3Err(new _M0DTP210LuoYunxin19moonnginx8NgxError12Unterminated(_M0FP210LuoYunxin19moonnginx9line__msg(c.line, "unexpected end of file, expecting }")));
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx3TokERP210LuoYunxin19moonnginx8NgxErrorE2Ok(toks);
}
function _M0FP210LuoYunxin19moonnginx12dir__comment(text, line) {
  return new _M0TP210LuoYunxin19moonnginx9Directive("#", line, [], [], [], false, text);
}
function _M0FP210LuoYunxin19moonnginx17strip__if__parens(args, quoted) {
  if (args.length === 0) {
    return { _0: args, _1: quoted };
  }
  const first = _M0MPC15array5Array2atGsE(args, 0);
  const last = _M0MPC15array5Array2atGsE(args, args.length - 1 | 0);
  if (!(_M0MPC16string6String11has__prefix(first, new _M0TPC16string10StringView(_M0FP210LuoYunxin19moonnginx17strip__if__parensN7_2abindS2175, 0, _M0FP210LuoYunxin19moonnginx17strip__if__parensN7_2abindS2175.length)) && _M0MPC16string6String11has__suffix(last, new _M0TPC16string10StringView(_M0FP210LuoYunxin19moonnginx17strip__if__parensN7_2abindS2176, 0, _M0FP210LuoYunxin19moonnginx17strip__if__parensN7_2abindS2176.length)))) {
    return { _0: args, _1: quoted };
  }
  const out_a = [];
  const out_q = [];
  let i = 0;
  while (true) {
    if (i < args.length) {
      let s = _M0MPC15array5Array2atGsE(args, i);
      if (i === 0) {
        s = _M0FP210LuoYunxin19moonnginx11slice__text(s, 1, s.length);
      }
      if (i === (args.length - 1 | 0)) {
        if (s.length > 0) {
          s = _M0FP210LuoYunxin19moonnginx11slice__text(s, 0, s.length - 1 | 0);
        }
      }
      if (s.length > 0) {
        _M0MPC15array5Array4pushGsE(out_a, s);
        _M0MPC15array5Array4pushGbE(out_q, _M0MPC15array5Array2atGbE(quoted, i));
      }
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return { _0: out_a, _1: out_q };
}
function _M0FP210LuoYunxin19moonnginx12finish__stmt(name, line, args, quoted, children, has_block) {
  const _bind = name === "if" ? _M0FP210LuoYunxin19moonnginx17strip__if__parens(args, quoted) : { _0: args, _1: quoted };
  const _a2 = _bind._0;
  const _q2 = _bind._1;
  return new _M0TP210LuoYunxin19moonnginx9Directive(name, line, _a2, _q2, children, has_block, undefined);
}
function _M0FP210LuoYunxin19moonnginx12parser__bump(p) {
  if (!(p.i >= p.toks.length)) {
    p.i = p.i + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0FP210LuoYunxin19moonnginx12parser__peek(p) {
  return p.i >= p.toks.length ? undefined : _M0MPC15array5Array2atGsE(p.toks, p.i);
}
function _M0FP210LuoYunxin19moonnginx12tok__is__arg(t) {
  const _bind = t.kind;
  switch (_bind) {
    case 0: {
      const _p = t.value;
      const _p$2 = "{";
      if (!(_p === _p$2)) {
        let _tmp;
        const _p$3 = t.value;
        const _p$4 = "}";
        if (!(_p$3 === _p$4)) {
          const _p$5 = t.value;
          const _p$6 = ";";
          _tmp = !(_p$5 === _p$6);
        } else {
          _tmp = false;
        }
        return _tmp;
      } else {
        return false;
      }
    }
    case 1: {
      return true;
    }
    case 2: {
      return false;
    }
    case 3: {
      return false;
    }
    case 4: {
      return false;
    }
    default: {
      return false;
    }
  }
}
function _M0FP210LuoYunxin19moonnginx12parse__stmts(p, in_block) {
  const out = [];
  while (true) {
    if (!(p.i >= p.toks.length)) {
      const _bind = _M0FP210LuoYunxin19moonnginx12parser__peek(p);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _t = _Some;
        const _bind$2 = _t.kind;
        switch (_bind$2) {
          case 3: {
            if (in_block) {
              _M0FP210LuoYunxin19moonnginx12parser__bump(p);
              return new _M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx9DirectiveERP210LuoYunxin19moonnginx8NgxErrorE2Ok(out);
            } else {
              return new _M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx9DirectiveERP210LuoYunxin19moonnginx8NgxErrorE3Err(new _M0DTP210LuoYunxin19moonnginx8NgxError10Unexpected(_M0FP210LuoYunxin19moonnginx9line__msg(_t.line, "unexpected }")));
            }
          }
          case 5: {
            _M0MPC15array5Array4pushGsE(out, _M0FP210LuoYunxin19moonnginx12dir__comment(_t.value, _t.line));
            _M0FP210LuoYunxin19moonnginx12parser__bump(p);
            break;
          }
          case 2: {
            return new _M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx9DirectiveERP210LuoYunxin19moonnginx8NgxErrorE3Err(new _M0DTP210LuoYunxin19moonnginx8NgxError10Unexpected(_M0FP210LuoYunxin19moonnginx9line__msg(_t.line, "unexpected {")));
          }
          case 4: {
            return new _M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx9DirectiveERP210LuoYunxin19moonnginx8NgxErrorE3Err(new _M0DTP210LuoYunxin19moonnginx8NgxError10Unexpected(_M0FP210LuoYunxin19moonnginx9line__msg(_t.line, "unexpected ;")));
          }
          case 1: {
            return new _M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx9DirectiveERP210LuoYunxin19moonnginx8NgxErrorE3Err(new _M0DTP210LuoYunxin19moonnginx8NgxError6Syntax(_M0FP210LuoYunxin19moonnginx9line__msg(_t.line, "quoted string cannot start a directive")));
          }
          default: {
            const _bind$3 = _M0FP210LuoYunxin19moonnginx11parse__stmt(p);
            if (_bind$3.$tag === 1) {
              const _Ok = _bind$3;
              const _d = _Ok._0;
              _M0MPC15array5Array4pushGsE(out, _d);
            } else {
              const _Err = _bind$3;
              const _e = _Err._0;
              return new _M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx9DirectiveERP210LuoYunxin19moonnginx8NgxErrorE3Err(_e);
            }
          }
        }
      }
      continue;
    } else {
      break;
    }
  }
  return in_block ? new _M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx9DirectiveERP210LuoYunxin19moonnginx8NgxErrorE3Err(new _M0DTP210LuoYunxin19moonnginx8NgxError12Unterminated(`${p.file}: unexpected end of file, expecting }`)) : new _M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx9DirectiveERP210LuoYunxin19moonnginx8NgxErrorE2Ok(out);
}
function _M0FP210LuoYunxin19moonnginx11parse__stmt(p) {
  const _bind = _M0FP210LuoYunxin19moonnginx12parser__peek(p);
  if (_bind === undefined) {
    return _M0FP210LuoYunxin19moonnginx11parse__stmtN6constrS2214;
  } else {
    const _Some = _bind;
    const _head = _Some;
    const name = _head.value;
    const line = _head.line;
    _M0FP210LuoYunxin19moonnginx12parser__bump(p);
    const args = [];
    const quoted = [];
    while (true) {
      if (!(p.i >= p.toks.length)) {
        const _bind$2 = _M0FP210LuoYunxin19moonnginx12parser__peek(p);
        if (_bind$2 === undefined) {
          break;
        } else {
          const _Some$2 = _bind$2;
          const _t = _Some$2;
          if (_M0FP210LuoYunxin19moonnginx12tok__is__arg(_t)) {
            _M0MPC15array5Array4pushGsE(args, _t.value);
            const _bind$3 = _t.kind;
            let _tmp;
            if (_bind$3 === 1) {
              _tmp = true;
            } else {
              _tmp = false;
            }
            _M0MPC15array5Array4pushGbE(quoted, _tmp);
            _M0FP210LuoYunxin19moonnginx12parser__bump(p);
          } else {
            break;
          }
        }
        continue;
      } else {
        break;
      }
    }
    if (p.i >= p.toks.length) {
      return new _M0DTPC16result6ResultGRP210LuoYunxin19moonnginx9DirectiveRP210LuoYunxin19moonnginx8NgxErrorE3Err(new _M0DTP210LuoYunxin19moonnginx8NgxError12Unterminated(_M0FP210LuoYunxin19moonnginx9line__msg(line, "premature end of file")));
    }
    const _bind$2 = _M0FP210LuoYunxin19moonnginx12parser__peek(p);
    if (_bind$2 === undefined) {
      return new _M0DTPC16result6ResultGRP210LuoYunxin19moonnginx9DirectiveRP210LuoYunxin19moonnginx8NgxErrorE3Err(new _M0DTP210LuoYunxin19moonnginx8NgxError12Unterminated(_M0FP210LuoYunxin19moonnginx9line__msg(line, "premature end of file")));
    } else {
      const _Some$2 = _bind$2;
      const _term = _Some$2;
      const _bind$3 = _term.kind;
      switch (_bind$3) {
        case 4: {
          _M0FP210LuoYunxin19moonnginx12parser__bump(p);
          const d = _M0FP210LuoYunxin19moonnginx12finish__stmt(name, line, args, quoted, [], false);
          return new _M0DTPC16result6ResultGRP210LuoYunxin19moonnginx9DirectiveRP210LuoYunxin19moonnginx8NgxErrorE2Ok(d);
        }
        case 2: {
          _M0FP210LuoYunxin19moonnginx12parser__bump(p);
          const _bind$4 = _M0FP210LuoYunxin19moonnginx12parse__stmts(p, true);
          if (_bind$4.$tag === 0) {
            const _Err = _bind$4;
            const _e = _Err._0;
            return new _M0DTPC16result6ResultGRP210LuoYunxin19moonnginx9DirectiveRP210LuoYunxin19moonnginx8NgxErrorE3Err(_e);
          } else {
            const _Ok = _bind$4;
            const _kids = _Ok._0;
            return new _M0DTPC16result6ResultGRP210LuoYunxin19moonnginx9DirectiveRP210LuoYunxin19moonnginx8NgxErrorE2Ok(_M0FP210LuoYunxin19moonnginx12finish__stmt(name, line, args, quoted, _kids, true));
          }
        }
        case 3: {
          return new _M0DTPC16result6ResultGRP210LuoYunxin19moonnginx9DirectiveRP210LuoYunxin19moonnginx8NgxErrorE3Err(new _M0DTP210LuoYunxin19moonnginx8NgxError6Syntax(_M0FP210LuoYunxin19moonnginx9line__msg(line, `directive ${name} is not terminated by ;`)));
        }
        default: {
          return new _M0DTPC16result6ResultGRP210LuoYunxin19moonnginx9DirectiveRP210LuoYunxin19moonnginx8NgxErrorE3Err(new _M0DTP210LuoYunxin19moonnginx8NgxError10Unexpected(_M0FP210LuoYunxin19moonnginx9line__msg(_term.line, `token ${_term.value}`)));
        }
      }
    }
  }
}
function _M0FP210LuoYunxin19moonnginx18parse__conf__named(file, text) {
  const _bind = _M0FP210LuoYunxin19moonnginx9lex__conf(text);
  if (_bind.$tag === 0) {
    const _Err = _bind;
    const _e = _Err._0;
    return new _M0DTPC16result6ResultGRP210LuoYunxin19moonnginx6ConfigRP210LuoYunxin19moonnginx8NgxErrorE3Err(_e);
  } else {
    const _Ok = _bind;
    const _toks = _Ok._0;
    const p = new _M0TP210LuoYunxin19moonnginx6Parser(_toks, 0, file);
    const _bind$2 = _M0FP210LuoYunxin19moonnginx12parse__stmts(p, false);
    if (_bind$2.$tag === 0) {
      const _Err = _bind$2;
      const _e = _Err._0;
      return new _M0DTPC16result6ResultGRP210LuoYunxin19moonnginx6ConfigRP210LuoYunxin19moonnginx8NgxErrorE3Err(_e);
    } else {
      const _Ok$2 = _bind$2;
      const _parsed = _Ok$2._0;
      if (!(p.i >= p.toks.length)) {
        const _bind$3 = _M0FP210LuoYunxin19moonnginx12parser__peek(p);
        if (_bind$3 === undefined) {
          return new _M0DTPC16result6ResultGRP210LuoYunxin19moonnginx6ConfigRP210LuoYunxin19moonnginx8NgxErrorE2Ok(_M0FP210LuoYunxin19moonnginx10config__ok(file, _parsed));
        } else {
          const _Some = _bind$3;
          const _t = _Some;
          const _bind$4 = _t.kind;
          if (_bind$4 === 3) {
            return new _M0DTPC16result6ResultGRP210LuoYunxin19moonnginx6ConfigRP210LuoYunxin19moonnginx8NgxErrorE3Err(new _M0DTP210LuoYunxin19moonnginx8NgxError10Unexpected(_M0FP210LuoYunxin19moonnginx9line__msg(_t.line, "unexpected }")));
          } else {
            return new _M0DTPC16result6ResultGRP210LuoYunxin19moonnginx6ConfigRP210LuoYunxin19moonnginx8NgxErrorE3Err(new _M0DTP210LuoYunxin19moonnginx8NgxError6Syntax(_M0FP210LuoYunxin19moonnginx9line__msg(_t.line, `${p.file} trailing token ${_t.value}`)));
          }
        }
      } else {
        return new _M0DTPC16result6ResultGRP210LuoYunxin19moonnginx6ConfigRP210LuoYunxin19moonnginx8NgxErrorE2Ok(_M0FP210LuoYunxin19moonnginx10config__ok(file, _parsed));
      }
    }
  }
}
function _M0MP210LuoYunxin19moonnginx8NgxError7message(self) {
  switch (self.$tag) {
    case 0: {
      const _Syntax = self;
      const _s = _Syntax._0;
      return `syntax: ${_s}`;
    }
    case 1: {
      const _Unexpected = self;
      const _s$2 = _Unexpected._0;
      return `unexpected: ${_s$2}`;
    }
    case 2: {
      const _Unterminated = self;
      const _s$3 = _Unterminated._0;
      return `unterminated: ${_s$3}`;
    }
    case 3: {
      const _Constraint = self;
      const _s$4 = _Constraint._0;
      return `constraint: ${_s$4}`;
    }
    default: {
      const _NotImplemented = self;
      const _s$5 = _NotImplemented._0;
      return `not-implemented: ${_s$5}`;
    }
  }
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner(code, message, path, line) {
  return new _M0TP38BeiLaDuo12cidr_2daudit5nginx11ConfigError(code, message, path, line);
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx16validate__limits(limits) {
  const fields = [{ _0: "max_sources", _1: limits.max_sources }, { _0: "max_total_chars", _1: limits.max_total_chars }, { _0: "max_source_chars", _1: limits.max_source_chars }, { _0: "max_include_depth", _1: limits.max_include_depth }, { _0: "max_include_expansions", _1: limits.max_include_expansions }, { _0: "max_context_depth", _1: limits.max_context_depth }, { _0: "max_directives", _1: limits.max_directives }, { _0: "max_contexts", _1: limits.max_contexts }, { _0: "max_rules", _1: limits.max_rules }, { _0: "max_audit_pairs", _1: limits.max_audit_pairs }];
  const _bind = fields.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const field = fields[_];
      if (field._1 < 1) {
        return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("invalid_limits", `${field._0} must be positive`, "", 0));
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (limits.max_context_depth > 128 || limits.max_include_depth > 64) {
    return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("invalid_limits", "Context depth is at most 128; include depth is at most 64", "", 0));
  }
  return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(undefined);
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx23normalize__source__path(path) {
  const chars = [];
  const _bind = _M0MPC16string6String9to__array(path);
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const char = _bind[_];
      if (char === 0) {
        return new _M0DTPC16result6ResultGsRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("invalid_path", "NUL in source path", "", 0));
      }
      _M0MPC15array5Array4pushGcE(chars, char === 92 ? 47 : char);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const text = _M0MPC16string6String11from__array(new _M0TPB9ArrayViewGcE(chars, 0, chars.length));
  if (text === "" || (_M0MPC16string6String11has__prefix(text, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit5nginx23normalize__source__pathN7_2abindS2277, 0, _M0FP38BeiLaDuo12cidr_2daudit5nginx23normalize__source__pathN7_2abindS2277.length)) || _M0MPC16string6String8contains(text, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit5nginx23normalize__source__pathN7_2abindS2278, 0, _M0FP38BeiLaDuo12cidr_2daudit5nginx23normalize__source__pathN7_2abindS2278.length)))) {
    return new _M0DTPC16result6ResultGsRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("invalid_path", `Empty, UNC, or URI path: ${path}`, "", 0));
  }
  if (text.length > 1024) {
    return new _M0DTPC16result6ResultGsRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("limit_exceeded", "Source path exceeds 1024 characters", "", 0));
  }
  const absolute = _M0MPC16string6String11has__prefix(text, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit5nginx23normalize__source__pathN7_2abindS2279, 0, _M0FP38BeiLaDuo12cidr_2daudit5nginx23normalize__source__pathN7_2abindS2279.length));
  const parts = [];
  const _it = _M0MPC16string6String5split(text, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit5nginx23normalize__source__pathN7_2abindS2280, 0, _M0FP38BeiLaDuo12cidr_2daudit5nginx23normalize__source__pathN7_2abindS2280.length));
  while (true) {
    const _bind$3 = _M0MPB4Iter4nextGRPC16string10StringViewE(_it);
    if (_bind$3 === undefined) {
      break;
    } else {
      const _Some = _bind$3;
      const _view = _Some;
      const part = _M0MPC16string10StringView9to__owned(_view);
      if (part === "" || part === ".") {
        continue;
      }
      if (part === "..") {
        if (parts.length === 0 || parts.length === 1 && _M0MPC16string6String11has__suffix(_M0MPC15array5Array2atGsE(parts, 0), new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit5nginx23normalize__source__pathN7_2abindS2281, 0, _M0FP38BeiLaDuo12cidr_2daudit5nginx23normalize__source__pathN7_2abindS2281.length))) {
          return new _M0DTPC16result6ResultGsRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("path_escape", `Path escapes its source namespace: ${path}`, "", 0));
        }
        _M0MPC15array5Array3popGsE(parts);
      } else {
        if (_M0MPC16string6String8contains(part, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit5nginx23normalize__source__pathN7_2abindS2282, 0, _M0FP38BeiLaDuo12cidr_2daudit5nginx23normalize__source__pathN7_2abindS2282.length))) {
          const pc = _M0MPC16string6String9to__array(part);
          const drive = parts.length === 0 && (pc.length === 2 && (_M0MPC15array5Array2atGcE(pc, 1) === 58 && (_M0MPC15array5Array2atGcE(pc, 0) >= 65 && _M0MPC15array5Array2atGcE(pc, 0) <= 90 || _M0MPC15array5Array2atGcE(pc, 0) >= 97 && _M0MPC15array5Array2atGcE(pc, 0) <= 122)));
          let _tmp$2;
          if (!drive) {
            _tmp$2 = true;
          } else {
            const _bind$4 = `${part}/`;
            _tmp$2 = !_M0MPC16string6String11has__prefix(text, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length));
          }
          if (_tmp$2) {
            return new _M0DTPC16result6ResultGsRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("invalid_path", `Unsupported colon in source path: ${path}`, "", 0));
          }
        }
        _M0MPC15array5Array4pushGsE(parts, part);
      }
      continue;
    }
  }
  if (parts.length === 0) {
    return new _M0DTPC16result6ResultGsRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("invalid_path", "A source path must name a file", "", 0));
  }
  return new _M0DTPC16result6ResultGsRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(`${absolute ? "/" : ""}${_M0MPC15array5Array4joinGsE(parts, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit5nginx23normalize__source__pathN7_2abindS2283, 0, _M0FP38BeiLaDuo12cidr_2daudit5nginx23normalize__source__pathN7_2abindS2283.length))}`);
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx16prepare__sources(sources, limits) {
  if (sources.length > limits.max_sources) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx10SourceFileERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("limit_exceeded", "Source count exceeds max_sources", "", 0));
  }
  const output = [];
  let remaining = limits.max_total_chars;
  const _bind = sources.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const source = sources[_];
      const _bind$2 = _M0FP38BeiLaDuo12cidr_2daudit5nginx23normalize__source__path(source.path);
      let path;
      if (_bind$2.$tag === 1) {
        const _Ok = _bind$2;
        path = _Ok._0;
      } else {
        const _Err = _bind$2;
        const _error = _Err._0;
        return new _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx10SourceFileERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_error);
      }
      let _tmp$2;
      let _p;
      _L: {
        _L$2: {
          const _p$2 = output.length;
          let _tmp$3 = 0;
          while (true) {
            const _p$3 = _tmp$3;
            if (_p$3 < _p$2) {
              const _p$4 = output[_p$3];
              if (_p$4.path === path) {
                _p = true;
                break _L$2;
              }
              _tmp$3 = _p$3 + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _tmp$2 = false;
          break _L;
        }
        _tmp$2 = _p;
      }
      if (_tmp$2) {
        return new _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx10SourceFileERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("duplicate_source", "Two sources normalize to the same path", path, 0));
      }
      if (source.content.length > limits.max_source_chars) {
        return new _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx10SourceFileERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("limit_exceeded", "Source exceeds max_source_chars", path, 0));
      }
      if (source.content.length > remaining) {
        return new _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx10SourceFileERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("limit_exceeded", "Bundle exceeds max_total_chars", path, 0));
      }
      remaining = remaining - source.content.length | 0;
      _M0MPC15array5Array4pushGsE(output, new _M0TP38BeiLaDuo12cidr_2daudit5nginx10SourceFile(path, source.content));
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx10SourceFileERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(output);
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx20check__parser__depth(source, maximum) {
  const chars = _M0MPC16string6String9to__array(source.content);
  let i = 0;
  let line = 1;
  let depth = 0;
  let quote = 0;
  let word = false;
  let comment = false;
  while (true) {
    if (i < chars.length) {
      const char = _M0MPC15array5Array2atGcE(chars, i);
      if (char === 10) {
        line = line + 1 | 0;
      }
      if (comment) {
        if (char === 10 || char === 13) {
          comment = false;
          word = false;
        }
        i = i + 1 | 0;
        continue;
      }
      if (quote !== 0) {
        if (char === 92) {
          if ((i + 1 | 0) < chars.length && _M0MPC15array5Array2atGcE(chars, i + 1 | 0) === 10) {
            line = line + 1 | 0;
          }
          i = i + 2 | 0;
          continue;
        }
        if (char === quote) {
          quote = 0;
          word = false;
        }
        i = i + 1 | 0;
        continue;
      }
      if (char === 92) {
        if ((i + 1 | 0) < chars.length && _M0MPC15array5Array2atGcE(chars, i + 1 | 0) === 10) {
          line = line + 1 | 0;
        }
        word = true;
        i = i + 2 | 0;
        continue;
      }
      if (char === 36 && ((i + 1 | 0) < chars.length && _M0MPC15array5Array2atGcE(chars, i + 1 | 0) === 123)) {
        i = i + 2 | 0;
        while (true) {
          if (i < chars.length && _M0MPC15array5Array2atGcE(chars, i) !== 125) {
            if (_M0MPC15array5Array2atGcE(chars, i) === 10) {
              line = line + 1 | 0;
            }
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (i < chars.length) {
          i = i + 1 | 0;
        }
        word = true;
        continue;
      }
      if ((char === 39 || char === 34) && !word) {
        quote = char;
      } else {
        if (char === 35 && !word) {
          comment = true;
        } else {
          if (char === 123) {
            depth = depth + 1 | 0;
            if (depth > maximum) {
              return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("limit_exceeded", "Configuration nesting exceeds max_context_depth", source.path, line));
            }
            word = false;
          } else {
            if (char === 125) {
              depth = depth - 1 | 0;
              word = false;
            } else {
              if (char === 59 || (char === 32 || (char === 9 || (char === 13 || char === 10)))) {
                word = false;
              } else {
                word = true;
              }
            }
          }
        }
      }
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(undefined);
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx21upstream__error__line(message) {
  if (!_M0MPC16string6String11has__prefix(message, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit5nginx21upstream__error__lineN7_2abindS2329, 0, _M0FP38BeiLaDuo12cidr_2daudit5nginx21upstream__error__lineN7_2abindS2329.length))) {
    return 0;
  }
  const chars = _M0MPC16string6String9to__array(message);
  let line = 0;
  let _tmp = 5;
  while (true) {
    const index = _tmp;
    if (index < chars.length) {
      const char = _M0MPC15array5Array2atGcE(chars, index);
      if (char < 48 || char > 57) {
        break;
      }
      if (line > 100000000) {
        return 0;
      }
      line = ((Math.imul(line, 10) | 0) + char | 0) - 48 | 0;
      _tmp = index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return line;
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx19parse__source__file(source, limits) {
  const _bind = _M0FP38BeiLaDuo12cidr_2daudit5nginx16validate__limits(limits);
  if (_bind.$tag === 0) {
    const _Err = _bind;
    const _error = _Err._0;
    return new _M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx9DirectiveERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_error);
  }
  const _bind$2 = _M0FP38BeiLaDuo12cidr_2daudit5nginx16prepare__sources([source], limits);
  let prepared;
  if (_bind$2.$tag === 0) {
    const _Err = _bind$2;
    const _error = _Err._0;
    return new _M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx9DirectiveERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_error);
  } else {
    const _Ok = _bind$2;
    const _files = _Ok._0;
    prepared = _M0MPC15array5Array2atGsE(_files, 0);
  }
  const _p = _M0MPC16string6String9to__array(prepared.content);
  let _tmp;
  let _p$2;
  _L: {
    _L$2: {
      const _p$3 = _p.length;
      let _tmp$2 = 0;
      while (true) {
        const _p$4 = _tmp$2;
        if (_p$4 < _p$3) {
          const _p$5 = _p[_p$4];
          if (_p$5 === 0) {
            _p$2 = true;
            break _L$2;
          }
          _tmp$2 = _p$4 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = false;
      break _L;
    }
    _tmp = _p$2;
  }
  if (_tmp) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx9DirectiveERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("invalid_input", "NUL in configuration text", prepared.path, 0));
  }
  const _bind$3 = _M0FP38BeiLaDuo12cidr_2daudit5nginx20check__parser__depth(prepared, limits.max_context_depth);
  if (_bind$3.$tag === 0) {
    const _Err = _bind$3;
    const _error = _Err._0;
    return new _M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx9DirectiveERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_error);
  }
  const _bind$4 = _M0FP210LuoYunxin19moonnginx18parse__conf__named(prepared.path, prepared.content);
  if (_bind$4.$tag === 0) {
    const _Err = _bind$4;
    const _error = _Err._0;
    const message = _M0MP210LuoYunxin19moonnginx8NgxError7message(_error);
    return new _M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx9DirectiveERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("parse_error", message, prepared.path, _M0FP38BeiLaDuo12cidr_2daudit5nginx21upstream__error__line(message)));
  } else {
    const _Ok = _bind$4;
    const _config = _Ok._0;
    return new _M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx9DirectiveERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(_config.parsed);
  }
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx14parsed__source(state, path) {
  const _bind = state.cache;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const cached = _bind[_];
      if (cached.path === path) {
        return new _M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx9DirectiveERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(cached.nodes);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let selected = undefined;
  const _bind$3 = state.files;
  const _bind$4 = _bind$3.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const file = _bind$3[_];
      if (file.path === path) {
        selected = file;
        break;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$5 = selected;
  let source;
  if (_bind$5 === undefined) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx9DirectiveERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("missing_source", "Source is absent from the supplied bundle", path, 0));
  } else {
    const _Some = _bind$5;
    source = _Some;
  }
  const _bind$6 = _M0FP38BeiLaDuo12cidr_2daudit5nginx19parse__source__file(source, state.limits);
  if (_bind$6.$tag === 0) {
    const _Err = _bind$6;
    const _error = _Err._0;
    return new _M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx9DirectiveERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_error);
  } else {
    const _Ok = _bind$6;
    const _nodes = _Ok._0;
    _M0MPC15array5Array4pushGsE(state.cache, new _M0TP38BeiLaDuo12cidr_2daudit5nginx12ParsedSource(path, _nodes));
    _M0MPC15array5Array4pushGsE(state.used, path);
    return new _M0DTPC16result6ResultGRPB5ArrayGRP210LuoYunxin19moonnginx9DirectiveERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(_nodes);
  }
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx16source__basename(path) {
  const chars = _M0MPC16string6String9to__array(path);
  let last = -1;
  let _tmp = 0;
  while (true) {
    const index = _tmp;
    if (index < chars.length) {
      if (_M0MPC15array5Array2atGcE(chars, index) === 47) {
        last = index;
      }
      _tmp = index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPC16string6String11from__array(_M0MPC15array5Array21clamped__view_2einnerGcE(chars, last + 1 | 0, undefined));
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx17source__directory(path) {
  const chars = _M0MPC16string6String9to__array(path);
  let last = -1;
  let _tmp = 0;
  while (true) {
    const index = _tmp;
    if (index < chars.length) {
      if (_M0MPC15array5Array2atGcE(chars, index) === 47) {
        last = index;
      }
      _tmp = index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return last === 0 ? "/" : last < 0 ? "" : _M0MPC16string6String11from__array(_M0MPC15array5Array21clamped__view_2einnerGcE(chars, 0, last));
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx22include__path__matches(pattern, candidate) {
  const _p = _M0FP38BeiLaDuo12cidr_2daudit5nginx17source__directory(pattern);
  const _p$2 = _M0FP38BeiLaDuo12cidr_2daudit5nginx17source__directory(candidate);
  if (!(_p === _p$2)) {
    return false;
  }
  const mask = _M0FP38BeiLaDuo12cidr_2daudit5nginx16source__basename(pattern);
  const filename = _M0FP38BeiLaDuo12cidr_2daudit5nginx16source__basename(candidate);
  if (_M0MPC16string6String11has__prefix(filename, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit5nginx22include__path__matchesN7_2abindS2388, 0, _M0FP38BeiLaDuo12cidr_2daudit5nginx22include__path__matchesN7_2abindS2388.length)) && !_M0MPC16string6String11has__prefix(mask, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit5nginx22include__path__matchesN7_2abindS2389, 0, _M0FP38BeiLaDuo12cidr_2daudit5nginx22include__path__matchesN7_2abindS2389.length))) {
    return false;
  }
  const pc = _M0MPC16string6String9to__array(mask);
  const fc = _M0MPC16string6String9to__array(filename);
  let p = 0;
  let f = 0;
  let star = -1;
  let retry = 0;
  while (true) {
    if (f < fc.length) {
      if (p < pc.length && (_M0MPC15array5Array2atGcE(pc, p) === 63 || _M0MPC15array5Array2atGcE(pc, p) === _M0MPC15array5Array2atGcE(fc, f))) {
        p = p + 1 | 0;
        f = f + 1 | 0;
      } else {
        if (p < pc.length && _M0MPC15array5Array2atGcE(pc, p) === 42) {
          star = p;
          p = p + 1 | 0;
          retry = f;
        } else {
          if (star >= 0) {
            retry = retry + 1 | 0;
            f = retry;
            p = star + 1 | 0;
          } else {
            return false;
          }
        }
      }
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (p < pc.length && _M0MPC15array5Array2atGcE(pc, p) === 42) {
      p = p + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return p === pc.length;
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx22absolute__source__path(path) {
  return _M0MPC16string6String11has__prefix(path, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit5nginx22absolute__source__pathN7_2abindS2402, 0, _M0FP38BeiLaDuo12cidr_2daudit5nginx22absolute__source__pathN7_2abindS2402.length)) || path.length >= 3 && _M0MPC15array5Array2atGcE(_M0MPC16string6String9to__array(path), 1) === 58;
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx25within__source__directory(root, path) {
  if (root === "") {
    return !_M0FP38BeiLaDuo12cidr_2daudit5nginx22absolute__source__path(path);
  } else {
    if (root === "/") {
      return _M0MPC16string6String11has__prefix(path, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit5nginx25within__source__directoryN7_2abindS2404, 0, _M0FP38BeiLaDuo12cidr_2daudit5nginx25within__source__directoryN7_2abindS2404.length));
    } else {
      const _bind = `${root}/`;
      return _M0MPC16string6String11has__prefix(path, new _M0TPC16string10StringView(_bind, 0, _bind.length));
    }
  }
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx22resolve__include__path(entry, operand) {
  if (operand === "" || (_M0MPC16string6String8contains(operand, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit5nginx22resolve__include__pathN7_2abindS2408, 0, _M0FP38BeiLaDuo12cidr_2daudit5nginx22resolve__include__pathN7_2abindS2408.length)) || (_M0MPC16string6String8contains(operand, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit5nginx22resolve__include__pathN7_2abindS2409, 0, _M0FP38BeiLaDuo12cidr_2daudit5nginx22resolve__include__pathN7_2abindS2409.length)) || (_M0MPC16string6String8contains(operand, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit5nginx22resolve__include__pathN7_2abindS2410, 0, _M0FP38BeiLaDuo12cidr_2daudit5nginx22resolve__include__pathN7_2abindS2410.length)) || (_M0MPC16string6String8contains(operand, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit5nginx22resolve__include__pathN7_2abindS2411, 0, _M0FP38BeiLaDuo12cidr_2daudit5nginx22resolve__include__pathN7_2abindS2411.length)) || _M0MPC16string6String8contains(operand, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit5nginx22resolve__include__pathN7_2abindS2412, 0, _M0FP38BeiLaDuo12cidr_2daudit5nginx22resolve__include__pathN7_2abindS2412.length))))))) {
    return new _M0DTPC16result6ResultGsRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("unsupported_include", `Unsupported include operand: ${operand}`, "", 0));
  }
  const _bind = _M0FP38BeiLaDuo12cidr_2daudit5nginx23normalize__source__path(entry);
  let main_path;
  if (_bind.$tag === 1) {
    const _Ok = _bind;
    main_path = _Ok._0;
  } else {
    const _Err = _bind;
    const _error = _Err._0;
    return new _M0DTPC16result6ResultGsRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_error);
  }
  const root = _M0FP38BeiLaDuo12cidr_2daudit5nginx17source__directory(main_path);
  const candidate = _M0FP38BeiLaDuo12cidr_2daudit5nginx22absolute__source__path(operand) ? operand : root === "" ? operand : root === "/" ? `${root}${operand}` : `${root}/${operand}`;
  const _bind$2 = _M0FP38BeiLaDuo12cidr_2daudit5nginx23normalize__source__path(candidate);
  let normalized;
  if (_bind$2.$tag === 1) {
    const _Ok = _bind$2;
    normalized = _Ok._0;
  } else {
    const _Err = _bind$2;
    const _error = _Err._0;
    return new _M0DTPC16result6ResultGsRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_error);
  }
  if (!_M0FP38BeiLaDuo12cidr_2daudit5nginx25within__source__directory(root, normalized)) {
    return new _M0DTPC16result6ResultGsRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("path_escape", `Include leaves the main configuration directory: ${operand}`, "", 0));
  }
  const dir = _M0FP38BeiLaDuo12cidr_2daudit5nginx17source__directory(normalized);
  if (_M0MPC16string6String8contains(dir, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit5nginx22resolve__include__pathN7_2abindS2413, 0, _M0FP38BeiLaDuo12cidr_2daudit5nginx22resolve__include__pathN7_2abindS2413.length)) || _M0MPC16string6String8contains(dir, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit5nginx22resolve__include__pathN7_2abindS2414, 0, _M0FP38BeiLaDuo12cidr_2daudit5nginx22resolve__include__pathN7_2abindS2414.length))) {
    return new _M0DTPC16result6ResultGsRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("unsupported_include", "Wildcards are supported only in the final path component", "", 0));
  }
  return new _M0DTPC16result6ResultGsRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(normalized);
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx14wildcard__path(path) {
  return _M0MPC16string6String8contains(path, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit5nginx14wildcard__pathN7_2abindS2430, 0, _M0FP38BeiLaDuo12cidr_2daudit5nginx14wildcard__pathN7_2abindS2430.length)) || _M0MPC16string6String8contains(path, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit5nginx14wildcard__pathN7_2abindS2431, 0, _M0FP38BeiLaDuo12cidr_2daudit5nginx14wildcard__pathN7_2abindS2431.length));
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx12expand__file(state, path, chain, include_depth, tree_depth) {
  if (_M0MPC15array5Array8containsGsE(chain, path)) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx12ExpandedNodeERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("include_cycle", `Include cycle: ${_M0MPC15array5Array4joinGsE(chain, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit5nginx12expand__fileN7_2abindS2433, 0, _M0FP38BeiLaDuo12cidr_2daudit5nginx12expand__fileN7_2abindS2433.length))} -> ${path}`, path, 0));
  }
  if (include_depth > state.limits.max_include_depth) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx12ExpandedNodeERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("limit_exceeded", "Include nesting exceeds max_include_depth", path, 0));
  }
  const _bind = _M0FP38BeiLaDuo12cidr_2daudit5nginx14parsed__source(state, path);
  let nodes;
  if (_bind.$tag === 1) {
    const _Ok = _bind;
    nodes = _Ok._0;
  } else {
    const _Err = _bind;
    const _error = _Err._0;
    return new _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx12ExpandedNodeERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_error);
  }
  return _M0FP38BeiLaDuo12cidr_2daudit5nginx13expand__nodes(state, nodes, path, chain, include_depth, tree_depth);
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx13expand__nodes(state, nodes, path, chain, include_depth, tree_depth) {
  if (tree_depth > state.limits.max_context_depth) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx12ExpandedNodeERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("limit_exceeded", "Expanded tree exceeds max_context_depth", path, 0));
  }
  const output = [];
  const _bind = nodes.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const directive = nodes[_];
      if (state.directives >= state.limits.max_directives) {
        return new _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx12ExpandedNodeERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("limit_exceeded", "Expanded nodes exceed max_directives", path, directive.line));
      }
      state.directives = state.directives + 1 | 0;
      const source = new _M0TP38BeiLaDuo12cidr_2daudit5nginx14SourceLocation(path, directive.line, _M0MPC15array5Array4copyGRP38BeiLaDuo12cidr_2daudit5nginx10AccessRuleE(chain));
      if (directive.name === "include" && !(directive.name === "#")) {
        if (directive.has_block || directive.args.length !== 1) {
          return new _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx12ExpandedNodeERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("invalid_include", "include requires exactly one path and no block", path, directive.line));
        }
        const _bind$2 = _M0FP38BeiLaDuo12cidr_2daudit5nginx22resolve__include__path(state.entry, _M0MPC15array5Array2atGsE(directive.args, 0));
        let pattern;
        if (_bind$2.$tag === 1) {
          const _Ok = _bind$2;
          pattern = _Ok._0;
        } else {
          const _Err = _bind$2;
          const _error = _Err._0;
          return new _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx12ExpandedNodeERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(new _M0TP38BeiLaDuo12cidr_2daudit5nginx11ConfigError(_error.code, _error.message, path, directive.line));
        }
        const targets = [];
        if (_M0FP38BeiLaDuo12cidr_2daudit5nginx14wildcard__path(pattern)) {
          const _bind$3 = state.files;
          const _bind$4 = _bind$3.length;
          let _tmp$2 = 0;
          while (true) {
            const _$2 = _tmp$2;
            if (_$2 < _bind$4) {
              const file = _bind$3[_$2];
              if (_M0FP38BeiLaDuo12cidr_2daudit5nginx22include__path__matches(pattern, file.path)) {
                _M0MPC15array5Array4pushGsE(targets, file.path);
              }
              _tmp$2 = _$2 + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0MPC15array5Array4sortGsE(targets);
        } else {
          const _p = state.files;
          let _tmp$2;
          let _p$2;
          _L: {
            _L$2: {
              const _p$3 = _p.length;
              let _tmp$3 = 0;
              while (true) {
                const _p$4 = _tmp$3;
                if (_p$4 < _p$3) {
                  const _p$5 = _p[_p$4];
                  if (_p$5.path === pattern) {
                    _p$2 = true;
                    break _L$2;
                  }
                  _tmp$3 = _p$4 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              _tmp$2 = false;
              break _L;
            }
            _tmp$2 = _p$2;
          }
          if (_tmp$2) {
            _M0MPC15array5Array4pushGsE(targets, pattern);
          } else {
            return new _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx12ExpandedNodeERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("missing_include", `Included file is absent: ${pattern}`, path, directive.line));
          }
        }
        _M0MPC15array5Array4pushGsE(state.edges, new _M0TP38BeiLaDuo12cidr_2daudit5nginx11IncludeEdge(source, pattern, _M0MPC15array5Array4copyGRP38BeiLaDuo12cidr_2daudit5nginx10AccessRuleE(targets)));
        if (targets.length === 0) {
          _M0MPC15array5Array4pushGsE(state.diagnostics, new _M0TP38BeiLaDuo12cidr_2daudit5nginx10Diagnostic("empty_include_mask", 0, false, `Include mask matched no supplied file: ${pattern}`, source, ""));
          if (state.expansions >= state.limits.max_include_expansions) {
            return new _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx12ExpandedNodeERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("limit_exceeded", "Include occurrences exceed max_include_expansions", path, directive.line));
          }
          state.expansions = state.expansions + 1 | 0;
        }
        const _bind$3 = targets.length;
        let _tmp$2 = 0;
        while (true) {
          const _$2 = _tmp$2;
          if (_$2 < _bind$3) {
            const target = targets[_$2];
            if (state.expansions >= state.limits.max_include_expansions) {
              return new _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx12ExpandedNodeERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("limit_exceeded", "Include occurrences exceed max_include_expansions", path, directive.line));
            }
            state.expansions = state.expansions + 1 | 0;
            const next_chain = _M0MPC15array5Array4copyGRP38BeiLaDuo12cidr_2daudit5nginx10AccessRuleE(chain);
            _M0MPC15array5Array4pushGsE(next_chain, path);
            const _bind$4 = _M0FP38BeiLaDuo12cidr_2daudit5nginx12expand__file(state, target, next_chain, include_depth + 1 | 0, tree_depth);
            if (_bind$4.$tag === 0) {
              const _Err = _bind$4;
              const _error = _Err._0;
              return new _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx12ExpandedNodeERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_error);
            } else {
              const _Ok = _bind$4;
              const _included = _Ok._0;
              const _bind$5 = _included.length;
              let _tmp$3 = 0;
              while (true) {
                const _$3 = _tmp$3;
                if (_$3 < _bind$5) {
                  const item = _included[_$3];
                  _M0MPC15array5Array4pushGsE(output, item);
                  _tmp$3 = _$3 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
            }
            _tmp$2 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      } else {
        let children;
        if (directive.has_block) {
          const _bind$2 = _M0FP38BeiLaDuo12cidr_2daudit5nginx13expand__nodes(state, directive.children, path, chain, include_depth, tree_depth + 1 | 0);
          if (_bind$2.$tag === 1) {
            const _Ok = _bind$2;
            children = _Ok._0;
          } else {
            const _Err = _bind$2;
            const _error = _Err._0;
            return new _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx12ExpandedNodeERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_error);
          }
        } else {
          children = [];
        }
        _M0MPC15array5Array4pushGsE(output, new _M0TP38BeiLaDuo12cidr_2daudit5nginx12ExpandedNode(directive, source, children));
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx12ExpandedNodeERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(output);
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx29check__report__budget_2einnerN7consumeS2487(remaining, count) {
  if (count > remaining.val) {
    return false;
  } else {
    remaining.val = remaining.val - count | 0;
    return true;
  }
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx29check__report__budget_2einner(analysis, selector, maximum, audits) {
  const remaining = new _M0TPB8MutLocalGiE(maximum);
  if (maximum < 1 || (!_M0FP38BeiLaDuo12cidr_2daudit5nginx29check__report__budget_2einnerN7consumeS2487(remaining, analysis.diagnostics.length) || (!_M0FP38BeiLaDuo12cidr_2daudit5nginx29check__report__budget_2einnerN7consumeS2487(remaining, analysis.include_edges.length) || !_M0FP38BeiLaDuo12cidr_2daudit5nginx29check__report__budget_2einnerN7consumeS2487(remaining, analysis.sources.length)))) {
    return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("limit_exceeded", "Report row budget exhausted", "", 0));
  }
  const _bind = analysis.contexts;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const context = _bind[_];
      _L: {
        if (selector === undefined) {
        } else {
          const _Some = selector;
          const _value = _Some;
          const _p = context.selector;
          if (!(_p === _value)) {
            break _L;
          }
        }
        if (!_M0FP38BeiLaDuo12cidr_2daudit5nginx29check__report__budget_2einnerN7consumeS2487(remaining, 1) || (!_M0FP38BeiLaDuo12cidr_2daudit5nginx29check__report__budget_2einnerN7consumeS2487(remaining, context.declared_rules.length) || (!_M0FP38BeiLaDuo12cidr_2daudit5nginx29check__report__budget_2einnerN7consumeS2487(remaining, context.rules.length) || !_M0FP38BeiLaDuo12cidr_2daudit5nginx29check__report__budget_2einnerN7consumeS2487(remaining, context.diagnostics.length)))) {
          return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("limit_exceeded", "Inherited report rows exceed max_directives", context.source.path, context.source.line));
        }
        break _L;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$3 = audits.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const audit = audits[_];
      if (!_M0FP38BeiLaDuo12cidr_2daudit5nginx29check__report__budget_2einnerN7consumeS2487(remaining, audit.findings.length)) {
        return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("limit_exceeded", "Finding report rows exceed max_directives", "", 0));
      }
      const _bind$4 = audit.findings;
      const _bind$5 = _bind$4.length;
      let _tmp$3 = 0;
      while (true) {
        const _$2 = _tmp$3;
        if (_$2 < _bind$5) {
          const finding = _bind$4[_$2];
          if (!_M0FP38BeiLaDuo12cidr_2daudit5nginx29check__report__budget_2einnerN7consumeS2487(remaining, finding.related_rule_ids.length)) {
            return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("limit_exceeded", "Related-rule report rows exceed max_directives", finding.source.path, finding.source.line));
          }
          _tmp$3 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(undefined);
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx21check__report__budget(analysis, selector, maximum, audits$46$opt) {
  let audits;
  if (audits$46$opt.$tag === 1) {
    const _Some = audits$46$opt;
    audits = _Some._0;
  } else {
    audits = [];
  }
  return _M0FP38BeiLaDuo12cidr_2daudit5nginx29check__report__budget_2einner(analysis, selector, maximum, audits);
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx20string__option__json(value) {
  if (value === undefined) {
    return _M0DTPB4Json4Null__;
  } else {
    const _Some = value;
    const _text = _Some;
    return _M0MPC14json4Json4JsonGsE(_text);
  }
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx12source__json(source) {
  const _bind = [{ _0: "file", _1: _M0MPC14json4Json4JsonGsE(source.path) }, { _0: "line", _1: _M0MPC14json4Json4JsonGiE(source.line) }, { _0: "include_chain", _1: _M0MPC14json4Json4JsonGRPB5ArrayGsEE(source.include_chain) }];
  const _p = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 3), undefined);
  return new _M0DTPB4Json6Object(_p);
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx16diagnostic__json(item) {
  const _bind = item.source;
  let source;
  if (_bind === undefined) {
    source = _M0DTPB4Json4Null__;
  } else {
    const _Some = _bind;
    const _value = _Some;
    source = _M0FP38BeiLaDuo12cidr_2daudit5nginx12source__json(_value);
  }
  const _bind$2 = [{ _0: "code", _1: _M0MPC14json4Json4JsonGsE(item.code) }, { _0: "severity", _1: _M0MPC14json4Json4JsonGsE(_M0MP28BeiLaDuo12cidr_2daudit8Severity5label(item.severity)) }, { _0: "blocking", _1: _M0MPC14json4Json4JsonGbE(item.blocking) }, { _0: "message", _1: _M0MPC14json4Json4JsonGsE(item.message) }, { _0: "context", _1: _M0MPC14json4Json4JsonGsE(item.context) }, { _0: "source", _1: source }];
  const _p = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$2, 0, 6), undefined);
  return new _M0DTPB4Json6Object(_p);
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx18access__rule__json(item) {
  const _p = item.rule;
  const _tmp = { _0: "id", _1: _M0MPC14json4Json4JsonGsE(_p.id) };
  const _p$2 = item.rule;
  const _tmp$2 = { _0: "action", _1: _M0MPC14json4Json4JsonGsE(_M0MP28BeiLaDuo12cidr_2daudit10RuleAction5label(_p$2.action)) };
  const _p$3 = item.rule;
  const _bind = [_tmp, _tmp$2, { _0: "cidr", _1: _M0MPC14json4Json4JsonGsE(_M0MP28BeiLaDuo12cidr_2daudit9CidrBlock10to__string(_p$3.block)) }, { _0: "raw_operand", _1: _M0MPC14json4Json4JsonGsE(item.raw_operand) }, { _0: "owner_context", _1: _M0MPC14json4Json4JsonGsE(item.owner_context) }, { _0: "source", _1: _M0FP38BeiLaDuo12cidr_2daudit5nginx12source__json(item.source) }];
  const _p$4 = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 6), undefined);
  return new _M0DTPB4Json6Object(_p$4);
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx13context__json(context) {
  const _tmp = { _0: "selector", _1: _M0MPC14json4Json4JsonGsE(context.selector) };
  const _tmp$2 = { _0: "kind", _1: _M0MPC14json4Json4JsonGsE(context.kind) };
  const _tmp$3 = { _0: "label", _1: _M0MPC14json4Json4JsonGsE(context.label) };
  const _tmp$4 = { _0: "source", _1: _M0FP38BeiLaDuo12cidr_2daudit5nginx12source__json(context.source) };
  const _tmp$5 = { _0: "parent", _1: _M0FP38BeiLaDuo12cidr_2daudit5nginx20string__option__json(context.parent) };
  const _tmp$6 = { _0: "inherited_from", _1: _M0FP38BeiLaDuo12cidr_2daudit5nginx20string__option__json(context.inherited_from) };
  const _p = context.declared_rules;
  const _p$2 = new Array(_p.length);
  const _p$3 = _p.length;
  let _tmp$7 = 0;
  while (true) {
    const _p$4 = _tmp$7;
    if (_p$4 < _p$3) {
      const _p$5 = _p[_p$4];
      _p$2[_p$4] = _M0FP38BeiLaDuo12cidr_2daudit5nginx18access__rule__json(_p$5);
      _tmp$7 = _p$4 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _p$4 = _p$2;
  const _tmp$8 = { _0: "declared_rules", _1: new _M0DTPB4Json5Array(_p$4) };
  const _p$5 = context.rules;
  const _p$6 = new Array(_p$5.length);
  const _p$7 = _p$5.length;
  let _tmp$9 = 0;
  while (true) {
    const _p$8 = _tmp$9;
    if (_p$8 < _p$7) {
      const _p$9 = _p$5[_p$8];
      _p$6[_p$8] = _M0FP38BeiLaDuo12cidr_2daudit5nginx18access__rule__json(_p$9);
      _tmp$9 = _p$8 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _p$8 = _p$6;
  const _tmp$10 = { _0: "effective_rules", _1: new _M0DTPB4Json5Array(_p$8) };
  const _p$9 = context.diagnostics;
  const _p$10 = new Array(_p$9.length);
  const _p$11 = _p$9.length;
  let _tmp$11 = 0;
  while (true) {
    const _p$12 = _tmp$11;
    if (_p$12 < _p$11) {
      const _p$13 = _p$9[_p$12];
      _p$10[_p$12] = _M0FP38BeiLaDuo12cidr_2daudit5nginx16diagnostic__json(_p$13);
      _tmp$11 = _p$12 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _p$12 = _p$10;
  const _bind = [_tmp, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$8, _tmp$10, { _0: "diagnostics", _1: new _M0DTPB4Json5Array(_p$12) }];
  const _p$13 = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 9), undefined);
  return new _M0DTPB4Json6Object(_p$13);
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx10edge__json(edge) {
  const _bind = [{ _0: "source", _1: _M0FP38BeiLaDuo12cidr_2daudit5nginx12source__json(edge.source) }, { _0: "pattern", _1: _M0MPC14json4Json4JsonGsE(edge.pattern) }, { _0: "targets", _1: _M0MPC14json4Json4JsonGRPB5ArrayGsEE(edge.targets) }];
  const _p = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 3), undefined);
  return new _M0DTPB4Json6Object(_p);
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx13finding__json(item) {
  const _bind = [{ _0: "code", _1: _M0MPC14json4Json4JsonGsE(item.code) }, { _0: "severity", _1: _M0MPC14json4Json4JsonGsE(_M0MP28BeiLaDuo12cidr_2daudit8Severity5label(item.severity)) }, { _0: "message", _1: _M0MPC14json4Json4JsonGsE(item.message) }, { _0: "rule_id", _1: _M0MPC14json4Json4JsonGsE(item.rule_id) }, { _0: "related_rule_ids", _1: _M0MPC14json4Json4JsonGRPB5ArrayGsEE(item.related_rule_ids) }, { _0: "source", _1: _M0FP38BeiLaDuo12cidr_2daudit5nginx12source__json(item.source) }, { _0: "context", _1: _M0MPC14json4Json4JsonGsE(item.context) }];
  const _p = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 7), undefined);
  return new _M0DTPB4Json6Object(_p);
}
function _M0MP38BeiLaDuo12cidr_2daudit5nginx12ContextAudit15count__severity(self, severity) {
  let result = 0;
  const _bind = self.findings;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const finding = _bind[_];
      if (_M0IP28BeiLaDuo12cidr_2daudit8SeverityPB2Eq5equal(finding.severity, severity)) {
        result = result + 1 | 0;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return result;
}
function _M0MP38BeiLaDuo12cidr_2daudit5nginx12ContextAudit15critical__count(self) {
  return _M0MP38BeiLaDuo12cidr_2daudit5nginx12ContextAudit15count__severity(self, 2);
}
function _M0MP38BeiLaDuo12cidr_2daudit5nginx12ContextAudit11info__count(self) {
  return _M0MP38BeiLaDuo12cidr_2daudit5nginx12ContextAudit15count__severity(self, 0);
}
function _M0MP38BeiLaDuo12cidr_2daudit5nginx12ContextAudit14warning__count(self) {
  return _M0MP38BeiLaDuo12cidr_2daudit5nginx12ContextAudit15count__severity(self, 1);
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx11audit__json(audit) {
  const _tmp = { _0: "context", _1: _M0MPC14json4Json4JsonGsE(audit.context) };
  const _tmp$2 = { _0: "blocking", _1: _M0MPC14json4Json4JsonGbE(audit.blocking) };
  const _tmp$3 = { _0: "critical", _1: _M0MPC14json4Json4JsonGiE(_M0MP38BeiLaDuo12cidr_2daudit5nginx12ContextAudit15critical__count(audit)) };
  const _tmp$4 = { _0: "warning", _1: _M0MPC14json4Json4JsonGiE(_M0MP38BeiLaDuo12cidr_2daudit5nginx12ContextAudit14warning__count(audit)) };
  const _tmp$5 = { _0: "info", _1: _M0MPC14json4Json4JsonGiE(_M0MP38BeiLaDuo12cidr_2daudit5nginx12ContextAudit11info__count(audit)) };
  const _p = audit.findings;
  const _p$2 = new Array(_p.length);
  const _p$3 = _p.length;
  let _tmp$6 = 0;
  while (true) {
    const _p$4 = _tmp$6;
    if (_p$4 < _p$3) {
      const _p$5 = _p[_p$4];
      _p$2[_p$4] = _M0FP38BeiLaDuo12cidr_2daudit5nginx13finding__json(_p$5);
      _tmp$6 = _p$4 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _p$4 = _p$2;
  const _bind = [_tmp, _tmp$2, _tmp$3, _tmp$4, _tmp$5, { _0: "findings", _1: new _M0DTPB4Json5Array(_p$4) }];
  const _p$5 = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 6), undefined);
  return new _M0DTPB4Json6Object(_p$5);
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx18selected__contexts(analysis, selector) {
  if (selector === undefined) {
    return analysis.contexts;
  } else {
    const _Some = selector;
    const _value = _Some;
    const _p = analysis.contexts;
    const _p$2 = [];
    const _p$3 = _p.length;
    let _tmp = 0;
    while (true) {
      const _p$4 = _tmp;
      if (_p$4 < _p$3) {
        const _p$5 = _p[_p$4];
        if (_p$5.selector === _value) {
          _M0MPC15array5Array4pushGsE(_p$2, _p$5);
        }
        _tmp = _p$4 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _p$2;
  }
}
function _M0MP38BeiLaDuo12cidr_2daudit5nginx13AccessContext13has__blocking(self) {
  const _p = self.diagnostics;
  const _p$2 = _p.length;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = _p[_p$3];
      if (_p$4.blocking) {
        return true;
      }
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0MP38BeiLaDuo12cidr_2daudit5nginx8Analysis13has__blocking(self) {
  const _p = self.diagnostics;
  let _tmp;
  let _p$2;
  _L: {
    _L$2: {
      const _p$3 = _p.length;
      let _tmp$2 = 0;
      while (true) {
        const _p$4 = _tmp$2;
        if (_p$4 < _p$3) {
          const _p$5 = _p[_p$4];
          if (_p$5.blocking) {
            _p$2 = true;
            break _L$2;
          }
          _tmp$2 = _p$4 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = false;
      break _L;
    }
    _tmp = _p$2;
  }
  if (_tmp) {
    return true;
  } else {
    const _p$3 = self.contexts;
    let _tmp$2;
    let _p$4;
    _L$2: {
      _L$3: {
        const _p$5 = _p$3.length;
        let _tmp$3 = 0;
        while (true) {
          const _p$6 = _tmp$3;
          if (_p$6 < _p$5) {
            const _p$7 = _p$3[_p$6];
            if (_M0MP38BeiLaDuo12cidr_2daudit5nginx13AccessContext13has__blocking(_p$7)) {
              _p$4 = true;
              break _L$3;
            }
            _tmp$3 = _p$6 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp$2 = false;
        break _L$2;
      }
      _tmp$2 = _p$4;
    }
    return _tmp$2;
  }
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx14analysis__json(analysis, selector) {
  const _p = 1;
  const _p$2 = undefined;
  const _tmp = { _0: "schema_version", _1: new _M0DTPB4Json6Number(_p, _p$2) };
  const _tmp$2 = { _0: "scope", _1: _M0MPC14json4Json4JsonGsE(analysis.scope) };
  const _tmp$3 = { _0: "scope_note", _1: _M0MPC14json4Json4JsonGsE("Only the IPv4 ngx_http_access_module rules in a selected structural context are modeled. No address restriction is not a statement of final request authorization.") };
  const _tmp$4 = { _0: "entry", _1: _M0MPC14json4Json4JsonGsE(analysis.entry) };
  const _tmp$5 = { _0: "sources", _1: _M0MPC14json4Json4JsonGRPB5ArrayGsEE(analysis.sources) };
  const _tmp$6 = { _0: "complete", _1: _M0MPC14json4Json4JsonGbE(!_M0MP38BeiLaDuo12cidr_2daudit5nginx8Analysis13has__blocking(analysis)) };
  const _p$3 = analysis.diagnostics;
  const _p$4 = new Array(_p$3.length);
  const _p$5 = _p$3.length;
  let _tmp$7 = 0;
  while (true) {
    const _p$6 = _tmp$7;
    if (_p$6 < _p$5) {
      const _p$7 = _p$3[_p$6];
      _p$4[_p$6] = _M0FP38BeiLaDuo12cidr_2daudit5nginx16diagnostic__json(_p$7);
      _tmp$7 = _p$6 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _p$6 = _p$4;
  const _tmp$8 = { _0: "diagnostics", _1: new _M0DTPB4Json5Array(_p$6) };
  const _p$7 = analysis.include_edges;
  const _p$8 = new Array(_p$7.length);
  const _p$9 = _p$7.length;
  let _tmp$9 = 0;
  while (true) {
    const _p$10 = _tmp$9;
    if (_p$10 < _p$9) {
      const _p$11 = _p$7[_p$10];
      _p$8[_p$10] = _M0FP38BeiLaDuo12cidr_2daudit5nginx10edge__json(_p$11);
      _tmp$9 = _p$10 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _p$10 = _p$8;
  const _tmp$10 = { _0: "include_edges", _1: new _M0DTPB4Json5Array(_p$10) };
  const _p$11 = _M0FP38BeiLaDuo12cidr_2daudit5nginx18selected__contexts(analysis, selector);
  const _p$12 = new Array(_p$11.length);
  const _p$13 = _p$11.length;
  let _tmp$11 = 0;
  while (true) {
    const _p$14 = _tmp$11;
    if (_p$14 < _p$13) {
      const _p$15 = _p$11[_p$14];
      _p$12[_p$14] = _M0FP38BeiLaDuo12cidr_2daudit5nginx13context__json(_p$15);
      _tmp$11 = _p$14 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _p$14 = _p$12;
  const _bind = [_tmp, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$8, _tmp$10, { _0: "contexts", _1: new _M0DTPB4Json5Array(_p$14) }];
  const _p$15 = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 9), undefined);
  return new _M0DTPB4Json6Object(_p$15);
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx8md__cell(value) {
  const result = [];
  const _bind = _M0MPC16string6String9to__array(value);
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const char = _bind[_];
      _L: {
        _L$2: {
          _L$3: {
            _L$4: {
              switch (char) {
                case 92: {
                  break _L$4;
                }
                case 124: {
                  break _L$4;
                }
                case 96: {
                  break _L$4;
                }
                case 60: {
                  break _L$4;
                }
                case 62: {
                  break _L$4;
                }
                case 38: {
                  break _L$4;
                }
                case 10: {
                  break _L$2;
                }
                case 13: {
                  break _L$2;
                }
                default: {
                  _M0MPC15array5Array4pushGcE(result, char);
                }
              }
              break _L$3;
            }
            _M0MPC15array5Array4pushGcE(result, 92);
            _M0MPC15array5Array4pushGcE(result, char);
          }
          break _L;
        }
        _M0MPC15array5Array4pushGcE(result, 32);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPC16string6String11from__array(new _M0TPB9ArrayViewGcE(result, 0, result.length));
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx14location__text(source) {
  return `${source.path}:${_M0MPC13int3Int18to__string_2einner(source.line, 10)}`;
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx16diagnostic__text(item) {
  const _bind = item.source;
  let source;
  if (_bind === undefined) {
    source = "";
  } else {
    const _Some = _bind;
    const _value = _Some;
    source = ` ${_M0FP38BeiLaDuo12cidr_2daudit5nginx14location__text(_value)}`;
  }
  return `[${_M0MP28BeiLaDuo12cidr_2daudit8Severity5label(item.severity)}] ${item.code}${source}: ${item.message}`;
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx12text__header(analysis) {
  const _tmp = analysis.entry;
  const _tmp$2 = analysis.scope;
  const _p = !_M0MP38BeiLaDuo12cidr_2daudit5nginx8Analysis13has__blocking(analysis);
  return `MoonCIDR Nginx IPv4 audit\nEntry: ${_tmp}\nScope: ${_tmp$2}\nComplete: ${_p ? "true" : "false"}\nOnly the IPv4 ngx_http_access_module rules in a selected structural context are modeled. No address restriction is not a statement of final request authorization.\n`;
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx13text__context(context) {
  const _bind = context.inherited_from;
  let inheritance;
  if (_bind === undefined) {
    inheritance = " declared locally";
  } else {
    const _Some = _bind;
    const _value = _Some;
    inheritance = ` inherited from ${_value}`;
  }
  let output = `\n${context.selector} ${context.label} (${_M0FP38BeiLaDuo12cidr_2daudit5nginx14location__text(context.source)})${inheritance}\n`;
  const _bind$2 = context.rules;
  const _bind$3 = _bind$2.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const item = _bind$2[_];
      const _tmp$2 = output;
      const _p = item.rule;
      const _tmp$3 = _p.id;
      const _p$2 = item.rule;
      output = `${_tmp$2}  ${_tmp$3} ${_M0MP28BeiLaDuo12cidr_2daudit10RuleAction5label(_p$2.action)} ${item.raw_operand} at ${_M0FP38BeiLaDuo12cidr_2daudit5nginx14location__text(item.source)}\n`;
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _p = context.rules;
  if (_p.length === 0) {
    output = `${output}  No address restriction in the modeled module.\n`;
  }
  const _bind$4 = context.diagnostics;
  const _bind$5 = _bind$4.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$5) {
      const item = _bind$4[_];
      output = `${output}  ${_M0FP38BeiLaDuo12cidr_2daudit5nginx16diagnostic__text(item)}\n`;
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return output;
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx16render__analysis(analysis, format, selector) {
  if (format === "json") {
    return _M0MPC14json4Json17stringify_2einner(_M0FP38BeiLaDuo12cidr_2daudit5nginx14analysis__json(analysis, selector), false, 2, undefined);
  }
  const contexts = _M0FP38BeiLaDuo12cidr_2daudit5nginx18selected__contexts(analysis, selector);
  if (format === "markdown") {
    let output = `# Nginx IPv4 access analysis\n\nOnly the IPv4 ngx_http_access_module rules in a selected structural context are modeled. No address restriction is not a statement of final request authorization.\n\nEntry: ${_M0FP38BeiLaDuo12cidr_2daudit5nginx8md__cell(analysis.entry)}\n\n| Context | Label | Effective rules | Inherited from | Source |\n|---|---|---:|---|---|\n`;
    const _bind = contexts.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const context = contexts[_];
        const _bind$2 = context.inherited_from;
        let inherited;
        if (_bind$2 === undefined) {
          inherited = "";
        } else {
          const _Some = _bind$2;
          inherited = _Some;
        }
        output = `${output}| ${_M0FP38BeiLaDuo12cidr_2daudit5nginx8md__cell(context.selector)} | ${_M0FP38BeiLaDuo12cidr_2daudit5nginx8md__cell(context.label)} | ${_M0MPC13int3Int18to__string_2einner(context.rules.length, 10)} | ${_M0FP38BeiLaDuo12cidr_2daudit5nginx8md__cell(inherited)} | ${_M0FP38BeiLaDuo12cidr_2daudit5nginx8md__cell(_M0FP38BeiLaDuo12cidr_2daudit5nginx14location__text(context.source))} |\n`;
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    output = `${output}\n## Diagnostics\n\n`;
    const _bind$2 = analysis.diagnostics;
    const _bind$3 = _bind$2.length;
    let _tmp$2 = 0;
    while (true) {
      const _ = _tmp$2;
      if (_ < _bind$3) {
        const item = _bind$2[_];
        output = `${output}- ${_M0FP38BeiLaDuo12cidr_2daudit5nginx8md__cell(_M0FP38BeiLaDuo12cidr_2daudit5nginx16diagnostic__text(item))}\n`;
        _tmp$2 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$4 = contexts.length;
    let _tmp$3 = 0;
    while (true) {
      const _ = _tmp$3;
      if (_ < _bind$4) {
        const context = contexts[_];
        const _bind$5 = context.diagnostics;
        const _bind$6 = _bind$5.length;
        let _tmp$4 = 0;
        while (true) {
          const _$2 = _tmp$4;
          if (_$2 < _bind$6) {
            const item = _bind$5[_$2];
            output = `${output}- ${_M0FP38BeiLaDuo12cidr_2daudit5nginx8md__cell(_M0FP38BeiLaDuo12cidr_2daudit5nginx16diagnostic__text(item))}\n`;
            _tmp$4 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp$3 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return output;
  }
  let output = _M0FP38BeiLaDuo12cidr_2daudit5nginx12text__header(analysis);
  const _bind = analysis.diagnostics;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const item = _bind[_];
      output = `${output}${_M0FP38BeiLaDuo12cidr_2daudit5nginx16diagnostic__text(item)}\n`;
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$3 = contexts.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const context = contexts[_];
      output = `${output}${_M0FP38BeiLaDuo12cidr_2daudit5nginx13text__context(context)}`;
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return output;
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx16render__contexts(analysis, format) {
  return _M0FP38BeiLaDuo12cidr_2daudit5nginx16render__analysis(analysis, format, undefined);
}
function _M0MP38BeiLaDuo12cidr_2daudit5nginx13AccessOutcome5label(self) {
  switch (self) {
    case 0: {
      return "allowed_by_rule";
    }
    case 1: {
      return "denied_by_rule";
    }
    default: {
      return "no_address_restriction";
    }
  }
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx13render__probe(result, format) {
  const _bind = result.matched_rule;
  let matched;
  if (_bind === undefined) {
    matched = _M0DTPB4Json4Null__;
  } else {
    const _Some = _bind;
    const _value = _Some;
    matched = _M0FP38BeiLaDuo12cidr_2daudit5nginx18access__rule__json(_value);
  }
  if (format === "json") {
    const _p = 1;
    const _p$2 = undefined;
    const _tmp = { _0: "schema_version", _1: new _M0DTPB4Json6Number(_p, _p$2) };
    const _p$3 = "nginx_http_access_ipv4";
    const _bind$2 = [_tmp, { _0: "scope", _1: new _M0DTPB4Json6String(_p$3) }, { _0: "scope_note", _1: _M0MPC14json4Json4JsonGsE("Only the IPv4 ngx_http_access_module rules in a selected structural context are modeled. No address restriction is not a statement of final request authorization.") }, { _0: "context", _1: _M0MPC14json4Json4JsonGsE(result.context) }, { _0: "ip", _1: _M0MPC14json4Json4JsonGsE(result.ip) }, { _0: "outcome", _1: _M0MPC14json4Json4JsonGsE(_M0MP38BeiLaDuo12cidr_2daudit5nginx13AccessOutcome5label(result.outcome)) }, { _0: "matched_rule", _1: matched }];
    const _p$4 = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$2, 0, 7), undefined);
    const value = new _M0DTPB4Json6Object(_p$4);
    return _M0MPC14json4Json17stringify_2einner(value, false, 2, undefined);
  }
  const _bind$2 = result.matched_rule;
  let rule_text;
  if (_bind$2 === undefined) {
    rule_text = "\nRule: none";
  } else {
    const _Some = _bind$2;
    const _value = _Some;
    const _p = _value.rule;
    rule_text = `\nRule: ${_p.id} at ${_M0FP38BeiLaDuo12cidr_2daudit5nginx14location__text(_value.source)}`;
  }
  const heading = format === "markdown" ? "# IPv4 address probe\n\n" : "IPv4 address probe\n";
  return `${heading}Context: ${result.context}\nIP: ${result.ip}\nOutcome: ${_M0MP38BeiLaDuo12cidr_2daudit5nginx13AccessOutcome5label(result.outcome)}${rule_text}\n\nOnly the IPv4 ngx_http_access_module rules in a selected structural context are modeled. No address restriction is not a statement of final request authorization.`;
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx14render__audits(analysis, audits, format, selector) {
  if (format === "json") {
    const value = _M0FP38BeiLaDuo12cidr_2daudit5nginx14analysis__json(analysis, selector);
    if (value.$tag === 6) {
      const _Object = value;
      const _map = _Object._0;
      const _p = new Array(audits.length);
      const _p$2 = audits.length;
      let _tmp = 0;
      while (true) {
        const _p$3 = _tmp;
        if (_p$3 < _p$2) {
          const _p$4 = audits[_p$3];
          _p[_p$3] = _M0FP38BeiLaDuo12cidr_2daudit5nginx11audit__json(_p$4);
          _tmp = _p$3 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const _p$3 = _p;
      _M0MPB3Map3setGsRPB4JsonE(_map, "audits", new _M0DTPB4Json5Array(_p$3));
    }
    return _M0MPC14json4Json17stringify_2einner(value, false, 2, undefined);
  }
  let output = _M0FP38BeiLaDuo12cidr_2daudit5nginx16render__analysis(analysis, format, selector);
  output = `${output}${format === "markdown" ? "\n## Findings\n\n| Context | Severity | Code | Rule | Message | Source |\n|---|---|---|---|---|---|\n" : "\nFindings:\n"}`;
  const _bind = audits.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const audit = audits[_];
      const _bind$2 = audit.findings;
      const _bind$3 = _bind$2.length;
      let _tmp$2 = 0;
      while (true) {
        const _$2 = _tmp$2;
        if (_$2 < _bind$3) {
          const item = _bind$2[_$2];
          if (format === "markdown") {
            output = `${output}| ${_M0FP38BeiLaDuo12cidr_2daudit5nginx8md__cell(item.context)} | ${_M0MP28BeiLaDuo12cidr_2daudit8Severity5label(item.severity)} | ${_M0FP38BeiLaDuo12cidr_2daudit5nginx8md__cell(item.code)} | ${_M0FP38BeiLaDuo12cidr_2daudit5nginx8md__cell(item.rule_id)} | ${_M0FP38BeiLaDuo12cidr_2daudit5nginx8md__cell(item.message)} | ${_M0FP38BeiLaDuo12cidr_2daudit5nginx8md__cell(_M0FP38BeiLaDuo12cidr_2daudit5nginx14location__text(item.source))} |\n`;
          } else {
            output = `${output}[${_M0MP28BeiLaDuo12cidr_2daudit8Severity5label(item.severity)}] ${item.context} ${item.code} ${item.rule_id} at ${_M0FP38BeiLaDuo12cidr_2daudit5nginx14location__text(item.source)}: ${item.message}\n`;
          }
          _tmp$2 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return output;
}
function _M0MP38BeiLaDuo12cidr_2daudit5nginx11ConfigError7summary(self) {
  const location = self.path === "" ? "" : self.line > 0 ? `${self.path}:${_M0MPC13int3Int18to__string_2einner(self.line, 10)}: ` : `${self.path}: `;
  return `${location}${self.code}: ${self.message}`;
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx13render__error(error, format) {
  if (format === "json") {
    const _p = 1;
    const _p$2 = undefined;
    const _tmp = { _0: "schema_version", _1: new _M0DTPB4Json6Number(_p, _p$2) };
    const _p$3 = "nginx_http_access_ipv4";
    const _tmp$2 = { _0: "scope", _1: new _M0DTPB4Json6String(_p$3) };
    const _p$4 = false;
    const _tmp$3 = { _0: "complete", _1: _p$4 ? _M0DTPB4Json4True__ : _M0DTPB4Json5False__ };
    const _bind = [{ _0: "code", _1: _M0MPC14json4Json4JsonGsE(error.code) }, { _0: "message", _1: _M0MPC14json4Json4JsonGsE(error.message) }, { _0: "file", _1: _M0MPC14json4Json4JsonGsE(error.path) }, { _0: "line", _1: _M0MPC14json4Json4JsonGiE(error.line) }];
    const _p$5 = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 4), undefined);
    const _bind$2 = [_tmp, _tmp$2, _tmp$3, { _0: "error", _1: new _M0DTPB4Json6Object(_p$5) }];
    const _p$6 = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$2, 0, 4), undefined);
    const value = new _M0DTPB4Json6Object(_p$6);
    return _M0MPC14json4Json17stringify_2einner(value, false, 2, undefined);
  }
  return format === "markdown" ? `# Analysis failed\n\n${_M0FP38BeiLaDuo12cidr_2daudit5nginx8md__cell(_M0MP38BeiLaDuo12cidr_2daudit5nginx11ConfigError7summary(error))}` : _M0MP38BeiLaDuo12cidr_2daudit5nginx11ConfigError7summary(error);
}
function _M0MP38BeiLaDuo12cidr_2daudit5nginx8Analysis7context(self, selector) {
  const _bind = self.contexts;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const context = _bind[_];
      if (context.selector === selector) {
        return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx13AccessContextRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(context);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx13AccessContextRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("unknown_context", `Unknown context: ${selector}`, "", 0));
}
function _M0MP38BeiLaDuo12cidr_2daudit5nginx13AccessContext11probe__ipv4(self, ip) {
  if (_M0MP38BeiLaDuo12cidr_2daudit5nginx13AccessContext13has__blocking(self)) {
    return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx11ProbeResultRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("unsupported_context", `Context has blocking diagnostics: ${self.selector}`, self.source.path, self.source.line));
  }
  const _bind = self.rules;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const item = _bind[_];
      if (_M0MP28BeiLaDuo12cidr_2daudit4Rule7matches(item.rule, ip)) {
        const _tmp$2 = _M0MP28BeiLaDuo12cidr_2daudit4IPv410to__dotted(ip);
        let _tmp$3;
        const _p = item.rule;
        if (_M0IP28BeiLaDuo12cidr_2daudit10RuleActionPB2Eq5equal(_p.action, 0)) {
          _tmp$3 = 0;
        } else {
          _tmp$3 = 1;
        }
        return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx11ProbeResultRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(new _M0TP38BeiLaDuo12cidr_2daudit5nginx11ProbeResult(_tmp$2, _tmp$3, self.selector, item));
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx11ProbeResultRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(new _M0TP38BeiLaDuo12cidr_2daudit5nginx11ProbeResult(_M0MP28BeiLaDuo12cidr_2daudit4IPv410to__dotted(ip), 2, self.selector, undefined));
}
function _M0MP38BeiLaDuo12cidr_2daudit5nginx13AccessContext5probe(self, ip) {
  const _bind = _M0MP28BeiLaDuo12cidr_2daudit4IPv45parse(ip);
  if (_bind.$tag === 0) {
    const _Err = _bind;
    const _message = _Err._0;
    return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx11ProbeResultRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("invalid_probe", _message, "", 0));
  } else {
    const _Ok = _bind;
    const _address = _Ok._0;
    return _M0MP38BeiLaDuo12cidr_2daudit5nginx13AccessContext11probe__ipv4(self, _address);
  }
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx20blocking__diagnostic(code, message, node, context) {
  return new _M0TP38BeiLaDuo12cidr_2daudit5nginx10Diagnostic(code, 2, true, message, node.source, context);
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx16contains__access(nodes) {
  const _bind = nodes.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const node = nodes[_];
      if (node.directive.name === "allow" || (node.directive.name === "deny" || _M0FP38BeiLaDuo12cidr_2daudit5nginx16contains__access(node.children))) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx27external__access__directive(name) {
  return _M0MPC15array5Array8containsGsE(["satisfy", "auth_basic", "auth_request", "auth_jwt", "real_ip_header", "real_ip_recursive", "set_real_ip_from", "rewrite", "return", "try_files", "error_page", "access_by_lua", "access_by_lua_file", "access_by_lua_block", "js_access", "internal", "limit_except"], name);
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx18disabled__external(node) {
  return _M0MPC15array5Array8containsGsE(["auth_basic", "auth_request", "auth_jwt"], node.directive.name) && (node.directive.args.length === 1 && (_M0MPC15array5Array2atGsE(node.directive.args, 0) === "off" && !node.directive.has_block));
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx21access__case__variant(name) {
  const _p = "allow";
  if (!(name === _p)) {
    let _tmp;
    const _p$2 = "deny";
    if (!(name === _p$2)) {
      _tmp = _M0MPC16string6String9to__lower(name) === "allow" || _M0MPC16string6String9to__lower(name) === "deny";
    } else {
      _tmp = false;
    }
    return _tmp;
  } else {
    return false;
  }
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx19parse__access__rule(node, selector, ordinal) {
  const directive = node.directive;
  if (directive.has_block || directive.args.length !== 1) {
    return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx10AccessRuleRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("invalid_access_rule", "allow/deny requires exactly one operand and no block", node.source.path, directive.line));
  }
  const operand = _M0MPC15array5Array2atGsE(directive.args, 0);
  const action = directive.name === "allow" ? 0 : 1;
  const target = operand === "all" ? "0.0.0.0/0" : operand;
  let _tmp;
  if (operand === "") {
    _tmp = true;
  } else {
    const _p = _M0MPC16string6String9to__array(operand);
    let _tmp$2;
    let _p$2;
    _L: {
      _L$2: {
        const _p$3 = _p.length;
        let _tmp$3 = 0;
        while (true) {
          const _p$4 = _tmp$3;
          if (_p$4 < _p$3) {
            const _p$5 = _p[_p$4];
            if (_p$5 === 32 || (_p$5 === 9 || (_p$5 === 13 || _p$5 === 10))) {
              _p$2 = true;
              break _L$2;
            }
            _tmp$3 = _p$4 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp$2 = false;
        break _L;
      }
      _tmp$2 = _p$2;
    }
    _tmp = _tmp$2;
  }
  if (_tmp) {
    return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx10AccessRuleRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("invalid_access_operand", "Access operand cannot contain whitespace", node.source.path, directive.line));
  }
  const _bind = _M0MP28BeiLaDuo12cidr_2daudit9CidrBlock5parse(target);
  let block;
  if (_bind.$tag === 1) {
    const _Ok = _bind;
    block = _Ok._0;
  } else {
    const _Err = _bind;
    const _message = _Err._0;
    return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx10AccessRuleRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("invalid_access_operand", _message, node.source.path, directive.line));
  }
  return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx10AccessRuleRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(new _M0TP38BeiLaDuo12cidr_2daudit5nginx10AccessRule(_M0MP28BeiLaDuo12cidr_2daudit4Rule11new_2einner(`${selector}/R${_M0MPC13int3Int18to__string_2einner(ordinal, 10)}`, action, block, target, ""), node.source, selector, operand));
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx14context__shape(node, kind) {
  const directive = node.directive;
  if (!directive.has_block) {
    return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("invalid_context", `${kind} requires a block`, node.source.path, directive.line));
  }
  if (kind === "http" || kind === "server") {
    if (directive.args.length !== 0) {
      return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("invalid_context", `${kind} does not accept arguments`, node.source.path, directive.line));
    }
  } else {
    if (kind === "location") {
      const args = directive.args;
      const valid = args.length === 1 || args.length === 2 && _M0MPC15array5Array8containsGsE(["=", "~", "~*", "^~"], _M0MPC15array5Array2atGsE(args, 0));
      if (!valid || _M0MPC15array5Array2atGsE(args, args.length - 1 | 0) === "") {
        return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("invalid_context", "Unsupported location declaration", node.source.path, directive.line));
      }
    }
  }
  return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(undefined);
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx13make__context(state, node, selector, kind, parent) {
  const _bind = _M0FP38BeiLaDuo12cidr_2daudit5nginx14context__shape(node, kind);
  if (_bind.$tag === 0) {
    const _Err = _bind;
    const _error = _Err._0;
    return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_error);
  }
  if (state.contexts.length >= state.limits.max_contexts) {
    return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("limit_exceeded", "Context count exceeds max_contexts", node.source.path, node.source.line));
  }
  const declared = [];
  const diagnostics = [];
  let has_local_access = false;
  let ordinal = 0;
  const _bind$2 = node.children;
  const _bind$3 = _bind$2.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const child = _bind$2[_];
      _L: {
        const name = child.directive.name;
        const _p = child.directive;
        if (_p.name === "#") {
          break _L;
        }
        if (name === "allow" || name === "deny") {
          has_local_access = true;
          ordinal = ordinal + 1 | 0;
          if (state.rule_count >= state.limits.max_rules) {
            return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("limit_exceeded", "Declared rules exceed max_rules", child.source.path, child.source.line));
          }
          state.rule_count = state.rule_count + 1 | 0;
          if (child.directive.has_block || child.directive.args.length !== 1) {
            return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("invalid_access_rule", "allow/deny requires exactly one operand and no block", child.source.path, child.source.line));
          }
          const operand = _M0MPC15array5Array2atGsE(child.directive.args, 0);
          if (_M0MPC16string6String8contains(operand, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit5nginx13make__contextN7_2abindS2723, 0, _M0FP38BeiLaDuo12cidr_2daudit5nginx13make__contextN7_2abindS2723.length))) {
            _M0MPC15array5Array4pushGsE(diagnostics, _M0FP38BeiLaDuo12cidr_2daudit5nginx20blocking__diagnostic("unsupported_address_family", `Only IPv4 access operands are analyzed: ${operand}`, child, selector));
          } else {
            if (_M0MPC16string6String8contains(operand, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit5nginx13make__contextN7_2abindS2724, 0, _M0FP38BeiLaDuo12cidr_2daudit5nginx13make__contextN7_2abindS2724.length))) {
              _M0MPC15array5Array4pushGsE(diagnostics, _M0FP38BeiLaDuo12cidr_2daudit5nginx20blocking__diagnostic("unsupported_dynamic_operand", "Dynamic access operands are not analyzed", child, selector));
            } else {
              const _bind$4 = _M0FP38BeiLaDuo12cidr_2daudit5nginx19parse__access__rule(child, selector, ordinal);
              if (_bind$4.$tag === 0) {
                const _Err = _bind$4;
                const _error = _Err._0;
                return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_error);
              } else {
                const _Ok = _bind$4;
                const _rule = _Ok._0;
                _M0MPC15array5Array4pushGsE(declared, _rule);
              }
            }
          }
        } else {
          if (_M0FP38BeiLaDuo12cidr_2daudit5nginx21access__case__variant(name)) {
            return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("invalid_access_rule", `Nginx access directive names are case-sensitive: ${name}`, child.source.path, child.source.line));
          } else {
            if (_M0FP38BeiLaDuo12cidr_2daudit5nginx27external__access__directive(name) && !_M0FP38BeiLaDuo12cidr_2daudit5nginx18disabled__external(child)) {
              _M0MPC15array5Array4pushGsE(diagnostics, _M0FP38BeiLaDuo12cidr_2daudit5nginx20blocking__diagnostic("external_access_dependency", `Request behavior is outside the address-module profile: ${name}`, child, selector));
            } else {
              let _tmp$2;
              if (child.directive.has_block) {
                let _tmp$3;
                const _p$2 = "location";
                if (!(name === _p$2)) {
                  const _p$3 = "server";
                  _tmp$3 = !(name === _p$3);
                } else {
                  _tmp$3 = false;
                }
                _tmp$2 = _tmp$3;
              } else {
                _tmp$2 = false;
              }
              if (_tmp$2) {
                if (_M0FP38BeiLaDuo12cidr_2daudit5nginx16contains__access(child.children)) {
                  _M0MPC15array5Array4pushGsE(diagnostics, _M0FP38BeiLaDuo12cidr_2daudit5nginx20blocking__diagnostic("unsupported_access_context", `Access rules appear in unsupported block: ${name}`, child, selector));
                }
              }
            }
          }
        }
        break _L;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let rules;
  let inherited_from;
  _L: {
    if (has_local_access) {
      rules = _M0MPC15array5Array4copyGRP38BeiLaDuo12cidr_2daudit5nginx10AccessRuleE(declared);
      inherited_from = undefined;
      break _L;
    } else {
      if (parent === undefined) {
        rules = [];
        inherited_from = undefined;
        break _L;
      } else {
        const _Some = parent;
        const _previous = _Some;
        const owner = _previous.rules.length === 0 ? undefined : _M0MPC16option6Option10unwrap__orGsE(_previous.inherited_from, _previous.selector);
        rules = _M0MPC15array5Array4copyGRP38BeiLaDuo12cidr_2daudit5nginx10AccessRuleE(_previous.rules);
        inherited_from = owner;
        break _L;
      }
    }
  }
  if (parent === undefined) {
  } else {
    const _Some = parent;
    const _previous = _Some;
    const _bind$4 = _previous.diagnostics;
    const _bind$5 = _bind$4.length;
    let _tmp$2 = 0;
    while (true) {
      const _ = _tmp$2;
      if (_ < _bind$5) {
        const diagnostic = _bind$4[_];
        if (!has_local_access || diagnostic.code === "external_access_dependency") {
          _M0MPC15array5Array4pushGsE(diagnostics, new _M0TP38BeiLaDuo12cidr_2daudit5nginx10Diagnostic(diagnostic.code, diagnostic.severity, diagnostic.blocking, diagnostic.message, diagnostic.source, selector));
        }
        _tmp$2 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  const label = `${kind}${node.directive.args.length === 0 ? "" : ` ${_M0MPC15array5Array4joinGsE(node.directive.args, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit5nginx13make__contextN7_2abindS2725, 0, _M0FP38BeiLaDuo12cidr_2daudit5nginx13make__contextN7_2abindS2725.length))}`}`;
  const context = new _M0TP38BeiLaDuo12cidr_2daudit5nginx13AccessContext(selector, kind, label, node.source, _M0MPC16option6Option3mapGRP38BeiLaDuo12cidr_2daudit5nginx13AccessContextsE(parent, (item) => item.selector), inherited_from, declared, rules, diagnostics, state.limits.max_audit_pairs);
  _M0MPC15array5Array4pushGsE(state.contexts, context);
  let server_count = 0;
  let location_count = 0;
  const _bind$4 = node.children;
  const _bind$5 = _bind$4.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$5) {
      const child = _bind$4[_];
      _L$2: {
        const _p = child.directive;
        if (_p.name === "#") {
          break _L$2;
        }
        const child_kind = child.directive.name;
        if (kind === "http" && child_kind === "server") {
          server_count = server_count + 1 | 0;
          const _bind$6 = _M0FP38BeiLaDuo12cidr_2daudit5nginx13make__context(state, child, `${selector}/server[${_M0MPC13int3Int18to__string_2einner(server_count, 10)}]`, "server", context);
          if (_bind$6.$tag === 0) {
            const _Err = _bind$6;
            const _error = _Err._0;
            return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_error);
          }
        } else {
          if ((kind === "server" || kind === "location") && child_kind === "location") {
            location_count = location_count + 1 | 0;
            const _bind$6 = _M0FP38BeiLaDuo12cidr_2daudit5nginx13make__context(state, child, `${selector}/location[${_M0MPC13int3Int18to__string_2einner(location_count, 10)}]`, "location", context);
            if (_bind$6.$tag === 0) {
              const _Err = _bind$6;
              const _error = _Err._0;
              return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_error);
            }
          } else {
            if (child_kind === "http" || (child_kind === "server" || child_kind === "location")) {
              _M0MPC15array5Array4pushGsE(state.diagnostics, _M0FP38BeiLaDuo12cidr_2daudit5nginx20blocking__diagnostic("invalid_context_relationship", `Unsupported structural parent for ${child_kind}`, child, selector));
            }
          }
        }
        break _L$2;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(undefined);
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx31analyze__nginx__sources_2einner(entry, sources, limits) {
  const _bind = _M0FP38BeiLaDuo12cidr_2daudit5nginx16validate__limits(limits);
  if (_bind.$tag === 0) {
    const _Err = _bind;
    const _error = _Err._0;
    return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx8AnalysisRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_error);
  }
  const _bind$2 = _M0FP38BeiLaDuo12cidr_2daudit5nginx23normalize__source__path(entry);
  let entry$2;
  if (_bind$2.$tag === 1) {
    const _Ok = _bind$2;
    entry$2 = _Ok._0;
  } else {
    const _Err = _bind$2;
    const _error = _Err._0;
    return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx8AnalysisRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_error);
  }
  const _bind$3 = _M0FP38BeiLaDuo12cidr_2daudit5nginx16prepare__sources(sources, limits);
  let files;
  if (_bind$3.$tag === 1) {
    const _Ok = _bind$3;
    files = _Ok._0;
  } else {
    const _Err = _bind$3;
    const _error = _Err._0;
    return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx8AnalysisRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_error);
  }
  const expand = new _M0TP38BeiLaDuo12cidr_2daudit5nginx11ExpandState(entry$2, files, limits, [], [], [], [], 0, 0);
  const _bind$4 = _M0FP38BeiLaDuo12cidr_2daudit5nginx12expand__file(expand, entry$2, [], 0, 0);
  let nodes;
  if (_bind$4.$tag === 1) {
    const _Ok = _bind$4;
    nodes = _Ok._0;
  } else {
    const _Err = _bind$4;
    const _error = _Err._0;
    return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx8AnalysisRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_error);
  }
  const state = new _M0TP38BeiLaDuo12cidr_2daudit5nginx10BuildState(limits, [], [], 0);
  let http_count = 0;
  const _bind$5 = nodes.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$5) {
      const node = nodes[_];
      _L: {
        const _p = node.directive;
        if (_p.name === "#") {
          break _L;
        }
        if (node.directive.name === "http") {
          http_count = http_count + 1 | 0;
          if (http_count > 1) {
            return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx8AnalysisRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("invalid_context", "Multiple http blocks are not a valid main Nginx configuration", node.source.path, node.source.line));
          }
          const _bind$6 = _M0FP38BeiLaDuo12cidr_2daudit5nginx13make__context(state, node, `http[${_M0MPC13int3Int18to__string_2einner(http_count, 10)}]`, "http", undefined);
          if (_bind$6.$tag === 0) {
            const _Err = _bind$6;
            const _error = _Err._0;
            return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx8AnalysisRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_error);
          }
        } else {
          if (node.directive.name === "allow" || (node.directive.name === "deny" || _M0FP38BeiLaDuo12cidr_2daudit5nginx21access__case__variant(node.directive.name))) {
            _M0MPC15array5Array4pushGsE(state.diagnostics, _M0FP38BeiLaDuo12cidr_2daudit5nginx20blocking__diagnostic("invalid_access_context", "Access directives are not valid in main context", node, ""));
          } else {
            if (_M0FP38BeiLaDuo12cidr_2daudit5nginx16contains__access(node.children)) {
              _M0MPC15array5Array4pushGsE(state.diagnostics, _M0FP38BeiLaDuo12cidr_2daudit5nginx20blocking__diagnostic("unsupported_access_context", `Access rules outside HTTP are not analyzed: ${node.directive.name}`, node, ""));
            }
          }
        }
        break _L;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (http_count === 0) {
    return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx8AnalysisRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("missing_http_context", "A main configuration must supply one http block", entry$2, 0));
  }
  const _bind$6 = expand.diagnostics;
  const _bind$7 = _bind$6.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$7) {
      const diagnostic = _bind$6[_];
      _M0MPC15array5Array4pushGsE(state.diagnostics, diagnostic);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$8 = state.diagnostics;
  const _bind$9 = _bind$8.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$9) {
      const diagnostic = _bind$8[_];
      if (diagnostic.blocking) {
        const _bind$10 = state.contexts;
        const _bind$11 = _bind$10.length;
        let _tmp$4 = 0;
        while (true) {
          const _$2 = _tmp$4;
          if (_$2 < _bind$11) {
            const context = _bind$10[_$2];
            _M0MPC15array5Array4pushGsE(context.diagnostics, new _M0TP38BeiLaDuo12cidr_2daudit5nginx10Diagnostic(diagnostic.code, diagnostic.severity, diagnostic.blocking, diagnostic.message, diagnostic.source, context.selector));
            _tmp$4 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      }
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx8AnalysisRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(new _M0TP38BeiLaDuo12cidr_2daudit5nginx8Analysis(entry$2, "nginx_http_access_ipv4", expand.used, expand.edges, state.contexts, state.diagnostics, limits.max_audit_pairs));
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx15finding_2einner(context, item, code, severity, message, related) {
  const _p = item.rule;
  return new _M0TP38BeiLaDuo12cidr_2daudit5nginx12AuditFinding(code, severity, message, _p.id, related, item.source, context.selector);
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx7finding(context, item, code, severity, message, related$46$opt) {
  let related;
  if (related$46$opt.$tag === 1) {
    const _Some = related$46$opt;
    related = _Some._0;
  } else {
    related = [];
  }
  return _M0FP38BeiLaDuo12cidr_2daudit5nginx15finding_2einner(context, item, code, severity, message, related);
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx17uncovered__ranges(block, effective) {
  const ranges = [];
  const _p = block.network;
  const begin = _p.value;
  const _p$2 = _M0MP28BeiLaDuo12cidr_2daudit9CidrBlock9broadcast(block);
  const end = _p$2.value;
  let cursor = begin;
  const _bind = effective.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const range = effective[_];
      _L: {
        if (range.end >>> 0 < cursor >>> 0) {
          break _L;
        }
        if (range.begin >>> 0 > end >>> 0) {
          break;
        }
        if (range.begin >>> 0 > cursor >>> 0) {
          _M0MPC15array5Array4pushGsE(ranges, { _0: cursor, _1: (range.begin >>> 0) - (1 >>> 0) | 0 });
        }
        if (range.end >>> 0 >= end >>> 0) {
          return ranges;
        }
        cursor = (range.end >>> 0) + (1 >>> 0) | 0;
        break _L;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array4pushGsE(ranges, { _0: cursor, _1: end });
  return ranges;
}
function _M0FP38BeiLaDuo12cidr_2daudit5nginx14audit__context(context, maximum) {
  const findings = [];
  const previous = [];
  const effective = [];
  let pairs = 0;
  const _bind = context.rules;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const item = _bind[_];
      if (previous.length > (maximum - pairs | 0)) {
        return new _M0DTPC16result6ResultGURP38BeiLaDuo12cidr_2daudit5nginx12ContextAuditiERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit5nginx21config__error_2einner("limit_exceeded", "Audit pair budget exhausted", item.source.path, item.source.line));
      }
      pairs = pairs + previous.length | 0;
      const _p = item.rule;
      const block = _p.block;
      let duplicate = undefined;
      let overlap = false;
      const related = [];
      const _bind$3 = previous.length;
      let _tmp$2 = 0;
      while (true) {
        const _$2 = _tmp$2;
        if (_$2 < _bind$3) {
          const old = previous[_$2];
          const _p$2 = old.rule;
          if (_M0MP28BeiLaDuo12cidr_2daudit9CidrBlock12equal__range(_p$2.block, block)) {
            const _p$3 = old.rule;
            const _tmp$3 = _p$3.action;
            const _p$4 = item.rule;
            if (_M0IP28BeiLaDuo12cidr_2daudit10RuleActionPB2Eq5equal(_tmp$3, _p$4.action)) {
              const _bind$4 = duplicate;
              if (_bind$4 === undefined) {
                duplicate = old;
              }
            }
          }
          const _p$3 = old.rule;
          if (_M0MP28BeiLaDuo12cidr_2daudit9CidrBlock8overlaps(_p$3.block, block)) {
            overlap = true;
            const _p$4 = old.rule;
            _M0MPC15array5Array4pushGsE(related, _p$4.id);
          }
          _tmp$2 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const uncovered = _M0FP38BeiLaDuo12cidr_2daudit5nginx17uncovered__ranges(block, effective);
      const covered = uncovered.length === 0;
      const _bind$4 = duplicate;
      if (_bind$4 === undefined) {
      } else {
        const _Some = _bind$4;
        const _old = _Some;
        const _p$2 = _old.rule;
        _M0MPC15array5Array4pushGsE(findings, _M0FP38BeiLaDuo12cidr_2daudit5nginx15finding_2einner(context, item, "duplicate_rule", 1, "Rule repeats an earlier operand and action", [_p$2.id]));
      }
      if (covered) {
        let opposite_effective;
        let _p$2;
        _L: {
          _L$2: {
            const _p$3 = effective.length;
            let _tmp$3 = 0;
            while (true) {
              const _p$4 = _tmp$3;
              if (_p$4 < _p$3) {
                const _p$5 = effective[_p$4];
                let _tmp$4;
                const _tmp$5 = _p$5.action;
                const _p$6 = item.rule;
                if (_M0IP016_24default__implPB2Eq10not__equalGRP28BeiLaDuo12cidr_2daudit10RuleActionE(_tmp$5, _p$6.action)) {
                  let _tmp$6;
                  const _tmp$7 = _p$5.begin;
                  const _p$7 = _M0MP28BeiLaDuo12cidr_2daudit9CidrBlock9broadcast(block);
                  if (_tmp$7 >>> 0 <= _p$7.value >>> 0) {
                    const _tmp$8 = _p$5.end;
                    const _p$8 = block.network;
                    _tmp$6 = _tmp$8 >>> 0 >= _p$8.value >>> 0;
                  } else {
                    _tmp$6 = false;
                  }
                  _tmp$4 = _tmp$6;
                } else {
                  _tmp$4 = false;
                }
                if (_tmp$4) {
                  _p$2 = true;
                  break _L$2;
                }
                _tmp$3 = _p$4 + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            opposite_effective = false;
            break _L;
          }
          opposite_effective = _p$2;
        }
        const severity = opposite_effective ? 2 : 1;
        _M0MPC15array5Array4pushGsE(findings, _M0FP38BeiLaDuo12cidr_2daudit5nginx15finding_2einner(context, item, "unreachable_rule", severity, "Earlier first-match rules cover this entire range; this rule cannot match", related));
      } else {
        if (overlap && block.prefix !== 0) {
          _M0MPC15array5Array4pushGsE(findings, _M0FP38BeiLaDuo12cidr_2daudit5nginx15finding_2einner(context, item, "ordered_exception", 0, "This range partly overlaps earlier rules; source order controls the exceptions", related));
        }
      }
      let _tmp$3;
      const _p$2 = item.raw_operand;
      const _p$3 = "all";
      if (!(_p$2 === _p$3)) {
        _tmp$3 = _M0MP28BeiLaDuo12cidr_2daudit9CidrBlock15has__host__bits(item.raw_operand);
      } else {
        _tmp$3 = false;
      }
      if (_tmp$3) {
        _M0MPC15array5Array4pushGsE(findings, _M0FP38BeiLaDuo12cidr_2daudit5nginx7finding(context, item, "non_canonical_cidr", 0, `CIDR host bits are normalized to ${_M0MP28BeiLaDuo12cidr_2daudit9CidrBlock10to__string(block)}`, _M0DTPC16option6OptionGRPB5ArrayGsEE4None__));
      }
      let _tmp$4;
      if (!covered) {
        let _tmp$5;
        const _p$4 = item.rule;
        if (_M0IP28BeiLaDuo12cidr_2daudit10RuleActionPB2Eq5equal(_p$4.action, 0)) {
          _tmp$5 = block.prefix === 0;
        } else {
          _tmp$5 = false;
        }
        _tmp$4 = _tmp$5;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _M0MPC15array5Array4pushGsE(findings, _M0FP38BeiLaDuo12cidr_2daudit5nginx7finding(context, item, "unrestricted_allow", 2, "This rule permits every remaining IPv4 address", _M0DTPC16option6OptionGRPB5ArrayGsEE4None__));
      } else {
        let _tmp$5;
        if (!covered) {
          let _tmp$6;
          const _p$4 = item.rule;
          if (_M0IP28BeiLaDuo12cidr_2daudit10RuleActionPB2Eq5equal(_p$4.action, 0)) {
            _tmp$6 = block.prefix <= 8;
          } else {
            _tmp$6 = false;
          }
          _tmp$5 = _tmp$6;
        } else {
          _tmp$5 = false;
        }
        if (_tmp$5) {
          _M0MPC15array5Array4pushGsE(findings, _M0FP38BeiLaDuo12cidr_2daudit5nginx7finding(context, item, "wide_allow", 1, `Review this broad IPv4 allow range: ${_M0MP28BeiLaDuo12cidr_2daudit9CidrBlock10to__string(block)}`, _M0DTPC16option6OptionGRPB5ArrayGsEE4None__));
        }
      }
      let _tmp$5;
      if (!covered) {
        let _tmp$6;
        const _p$4 = item.rule;
        if (_M0IP28BeiLaDuo12cidr_2daudit10RuleActionPB2Eq5equal(_p$4.action, 1)) {
          _tmp$6 = block.prefix === 0;
        } else {
          _tmp$6 = false;
        }
        _tmp$5 = _tmp$6;
      } else {
        _tmp$5 = false;
      }
      if (_tmp$5) {
        _M0MPC15array5Array4pushGsE(findings, _M0FP38BeiLaDuo12cidr_2daudit5nginx7finding(context, item, "terminal_default", 0, "Remaining IPv4 addresses are denied; earlier allow rules remain effective", _M0DTPC16option6OptionGRPB5ArrayGsEE4None__));
      }
      _M0MPC15array5Array4pushGsE(previous, item);
      const _bind$5 = uncovered.length;
      let _tmp$6 = 0;
      while (true) {
        const _$2 = _tmp$6;
        if (_$2 < _bind$5) {
          const range = uncovered[_$2];
          const _tmp$7 = range._0;
          const _tmp$8 = range._1;
          const _p$4 = item.rule;
          _M0MPC15array5Array4pushGsE(effective, new _M0TP38BeiLaDuo12cidr_2daudit5nginx10OwnedRange(_tmp$7, _tmp$8, _p$4.action));
          _tmp$6 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array8sort__byGRP38BeiLaDuo12cidr_2daudit5nginx10OwnedRangeE(effective, (left, right) => $compare_uint(left.begin, right.begin));
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (context.rules.length === 0) {
    _M0MPC15array5Array4pushGsE(findings, new _M0TP38BeiLaDuo12cidr_2daudit5nginx12AuditFinding("no_access_rules", 0, "This context has no effective IPv4 access rules", "", [], context.source, context.selector));
  } else {
    const universe = _M0MPC16result6Result6unwrapGRP28BeiLaDuo12cidr_2daudit9CidrBlocksE(_M0MP28BeiLaDuo12cidr_2daudit9CidrBlock5parse("0.0.0.0/0"));
    if (_M0FP38BeiLaDuo12cidr_2daudit5nginx17uncovered__ranges(universe, effective).length > 0) {
      _M0MPC15array5Array4pushGsE(findings, _M0FP38BeiLaDuo12cidr_2daudit5nginx7finding(context, _M0MPC15array5Array2atGsE(context.rules, context.rules.length - 1 | 0), "unrestricted_fallback", 1, "Some IPv4 addresses match no rule; the address module leaves them unrestricted", _M0DTPC16option6OptionGRPB5ArrayGsEE4None__));
    }
  }
  return new _M0DTPC16result6ResultGURP38BeiLaDuo12cidr_2daudit5nginx12ContextAuditiERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok({ _0: new _M0TP38BeiLaDuo12cidr_2daudit5nginx12ContextAudit(context.selector, findings, _M0MP38BeiLaDuo12cidr_2daudit5nginx13AccessContext13has__blocking(context)), _1: pairs });
}
function _M0MP38BeiLaDuo12cidr_2daudit5nginx13AccessContext5audit(self) {
  const _bind = _M0FP38BeiLaDuo12cidr_2daudit5nginx14audit__context(self, self.audit_pair_budget);
  if (_bind.$tag === 1) {
    const _Ok = _bind;
    const _x = _Ok._0;
    const _report = _x._0;
    return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx12ContextAuditRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(_report);
  } else {
    const _Err = _bind;
    const _error = _Err._0;
    return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx12ContextAuditRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_error);
  }
}
function _M0MP38BeiLaDuo12cidr_2daudit5nginx8Analysis6audits(self) {
  const reports = [];
  let remaining = self.audit_pair_budget;
  const _bind = self.contexts;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const context = _bind[_];
      const _bind$3 = _M0FP38BeiLaDuo12cidr_2daudit5nginx14audit__context(context, remaining);
      if (_bind$3.$tag === 0) {
        const _Err = _bind$3;
        const _error = _Err._0;
        return new _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx12ContextAuditERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_error);
      } else {
        const _Ok = _bind$3;
        const _x = _Ok._0;
        const _report = _x._0;
        const _work = _x._1;
        remaining = remaining - _work | 0;
        _M0MPC15array5Array4pushGsE(reports, _report);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx12ContextAuditERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(reports);
}
function _M0IP38BeiLaDuo12cidr_2daudit3cli7CommandPB2Eq5equal(_x_80, _x_81) {
  switch (_x_80) {
    case 0: {
      if (_x_81 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_81 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_81 === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (_x_81 === 3) {
        return true;
      } else {
        return false;
      }
    }
    case 4: {
      if (_x_81 === 4) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_81 === 5) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function _M0FP38BeiLaDuo12cidr_2daudit3cli8complete(exit_code, output) {
  return new _M0TP38BeiLaDuo12cidr_2daudit3cli9CliResult(exit_code, output, "");
}
function _M0FP38BeiLaDuo12cidr_2daudit3cli15config__failure(error, format) {
  const exit_code = error.code === "limit_exceeded" ? 4 : _M0MPC16string6String11has__prefix(error.code, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit3cli15config__failureN7_2abindS2915, 0, _M0FP38BeiLaDuo12cidr_2daudit3cli15config__failureN7_2abindS2915.length)) ? 3 : 2;
  return new _M0TP38BeiLaDuo12cidr_2daudit3cli9CliResult(exit_code, "", _M0FP38BeiLaDuo12cidr_2daudit5nginx13render__error(error, format));
}
function _M0FP38BeiLaDuo12cidr_2daudit3cli12cli__failure(error) {
  return new _M0TP38BeiLaDuo12cidr_2daudit3cli9CliResult(2, "", `${error.code}: ${error.message}\n`);
}
function _M0FP38BeiLaDuo12cidr_2daudit3cli15argument__error(code, message) {
  return new _M0TP38BeiLaDuo12cidr_2daudit3cli8CliError(code, message);
}
function _M0FP38BeiLaDuo12cidr_2daudit3cli15validate__entry(entry) {
  if (entry === "" || (_M0MPC16string6String8contains(entry, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit3cli15validate__entryN7_2abindS2923, 0, _M0FP38BeiLaDuo12cidr_2daudit3cli15validate__entryN7_2abindS2923.length)) || (_M0MPC16string6String8contains(entry, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit3cli15validate__entryN7_2abindS2924, 0, _M0FP38BeiLaDuo12cidr_2daudit3cli15validate__entryN7_2abindS2924.length)) || (_M0MPC16string6String11has__prefix(entry, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit3cli15validate__entryN7_2abindS2925, 0, _M0FP38BeiLaDuo12cidr_2daudit3cli15validate__entryN7_2abindS2925.length)) || _M0MPC16string6String11has__prefix(entry, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit3cli15validate__entryN7_2abindS2926, 0, _M0FP38BeiLaDuo12cidr_2daudit3cli15validate__entryN7_2abindS2926.length)))))) {
    return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit3cli15argument__error("invalid_entry", "CONFIG must be a relative local path inside --root"));
  }
  const normalized = _M0MPC16string6String12replace__all(entry, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit3cli15validate__entryN7_2abindS2927, 0, _M0FP38BeiLaDuo12cidr_2daudit3cli15validate__entryN7_2abindS2927.length), new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit3cli15validate__entryN7_2abindS2928, 0, _M0FP38BeiLaDuo12cidr_2daudit3cli15validate__entryN7_2abindS2928.length));
  const _it = _M0MPC16string6String5split(normalized, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit3cli15validate__entryN7_2abindS2929, 0, _M0FP38BeiLaDuo12cidr_2daudit3cli15validate__entryN7_2abindS2929.length));
  while (true) {
    const _bind = _M0MPB4Iter4nextGRPC16string10StringViewE(_it);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _component = _Some;
      if (_M0IPC16string10StringViewPB2Eq5equal(_component, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit3cli15validate__entryN7_2abindS2930, 0, _M0FP38BeiLaDuo12cidr_2daudit3cli15validate__entryN7_2abindS2930.length)) || _M0IPC16string10StringViewPB2Eq5equal(_component, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit3cli15validate__entryN7_2abindS2931, 0, _M0FP38BeiLaDuo12cidr_2daudit3cli15validate__entryN7_2abindS2931.length))) {
        return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit3cli15argument__error("invalid_entry", "CONFIG must not contain traversal or empty path components"));
      }
      continue;
    }
  }
  return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE2Ok(undefined);
}
function _M0FP38BeiLaDuo12cidr_2daudit3cli3run(options, sources) {
  if (_M0IP38BeiLaDuo12cidr_2daudit3cli7CommandPB2Eq5equal(options.command, 0)) {
    return _M0FP38BeiLaDuo12cidr_2daudit3cli8complete(0, "MoonCIDR Audit - offline Nginx IPv4 address-access analysis\n\nUsage:\n  mooncidr contexts CONFIG [OPTIONS]\n  mooncidr audit CONFIG [--context ID] [--strict] [OPTIONS]\n  mooncidr probe CONFIG IP --context ID [OPTIONS]\n  mooncidr validate CONFIG [OPTIONS]\n  mooncidr help\n  mooncidr version\n\nOptions:\n  --root DIRECTORY     Local input root, default '.'\n  --format FORMAT      text, json, or markdown; default text\n  --context ID         Exact selector from the contexts command\n  --strict             Audit also fails on warnings\n  --limits NAME=VALUE,...   Override positive integer resource limits\n\nLimit names: max_sources, max_total_chars, max_source_chars,\nmax_include_depth, max_include_expansions, max_directives,\nmax_contexts, max_context_depth, max_rules, max_audit_pairs.\nExample: --limits max_sources=32,max_include_depth=8\n\nCONFIG is relative to --root. Includes are anchored to CONFIG's directory.\nThis tool analyzes only the supported Nginx IPv4 allow/deny scope.\nA probe reports address-rule behavior; it does not authorize a request.\nIt does not infer a location from a URL or model authentication.\n\nExit codes: 0 completed; 1 audit gate failed; 2 input/IO error;\n3 unsupported or incomplete analysis; 4 resource budget exceeded.");
  }
  if (_M0IP38BeiLaDuo12cidr_2daudit3cli7CommandPB2Eq5equal(options.command, 1)) {
    return _M0FP38BeiLaDuo12cidr_2daudit3cli8complete(0, "MoonCIDR Audit Nginx analyzer 0.2.0\n");
  }
  const _bind = _M0FP38BeiLaDuo12cidr_2daudit3cli15validate__entry(options.entry);
  if (_bind.$tag === 0) {
    const _Err = _bind;
    const _error = _Err._0;
    return _M0FP38BeiLaDuo12cidr_2daudit3cli12cli__failure(_error);
  }
  let _tmp;
  const _p = options.format;
  const _p$2 = "text";
  if (!(_p === _p$2)) {
    let _tmp$2;
    const _p$3 = options.format;
    const _p$4 = "json";
    if (!(_p$3 === _p$4)) {
      const _p$5 = options.format;
      const _p$6 = "markdown";
      _tmp$2 = !(_p$5 === _p$6);
    } else {
      _tmp$2 = false;
    }
    _tmp = _tmp$2;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    return _M0FP38BeiLaDuo12cidr_2daudit3cli12cli__failure(_M0FP38BeiLaDuo12cidr_2daudit3cli15argument__error("invalid_format", "format must be text, json, or markdown"));
  }
  if (_M0IP38BeiLaDuo12cidr_2daudit3cli7CommandPB2Eq5equal(options.command, 4)) {
    _L: {
      _L$2: {
        const _bind$2 = options.context_selector;
        if (_bind$2 === undefined) {
          break _L$2;
        } else {
          const _bind$3 = options.ip;
          if (_bind$3 === undefined) {
            break _L$2;
          }
        }
        break _L;
      }
      return _M0FP38BeiLaDuo12cidr_2daudit3cli12cli__failure(_M0FP38BeiLaDuo12cidr_2daudit3cli15argument__error("invalid_arguments", "probe requires IP and context selector"));
    }
  }
  const _bind$2 = _M0FP38BeiLaDuo12cidr_2daudit5nginx31analyze__nginx__sources_2einner(options.entry, sources, options.limits);
  let analysis;
  if (_bind$2.$tag === 1) {
    const _Ok = _bind$2;
    analysis = _Ok._0;
  } else {
    const _Err = _bind$2;
    const _error = _Err._0;
    return _M0FP38BeiLaDuo12cidr_2daudit3cli15config__failure(_error, options.format);
  }
  if (_M0IP016_24default__implPB2Eq10not__equalGRP38BeiLaDuo12cidr_2daudit3cli7CommandE(options.command, 4) || _M0MP38BeiLaDuo12cidr_2daudit5nginx8Analysis13has__blocking(analysis)) {
    const selector = _M0IP38BeiLaDuo12cidr_2daudit3cli7CommandPB2Eq5equal(options.command, 2) || _M0IP38BeiLaDuo12cidr_2daudit3cli7CommandPB2Eq5equal(options.command, 5) ? undefined : options.context_selector;
    const _bind$3 = _M0FP38BeiLaDuo12cidr_2daudit5nginx21check__report__budget(analysis, selector, options.limits.max_directives, _M0DTPC16option6OptionGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx12ContextAuditEE4None__);
    if (_bind$3.$tag === 1) {
    } else {
      const _Err = _bind$3;
      const _error = _Err._0;
      return _M0FP38BeiLaDuo12cidr_2daudit3cli15config__failure(_error, options.format);
    }
  }
  if (_M0MP38BeiLaDuo12cidr_2daudit5nginx8Analysis13has__blocking(analysis)) {
    const output = _M0IP38BeiLaDuo12cidr_2daudit3cli7CommandPB2Eq5equal(options.command, 2) ? _M0FP38BeiLaDuo12cidr_2daudit5nginx16render__contexts(analysis, options.format) : _M0FP38BeiLaDuo12cidr_2daudit5nginx16render__analysis(analysis, options.format, options.context_selector);
    return _M0FP38BeiLaDuo12cidr_2daudit3cli8complete(3, output);
  }
  _L: {
    const _bind$3 = options.command;
    switch (_bind$3) {
      case 2: {
        return _M0FP38BeiLaDuo12cidr_2daudit3cli8complete(0, _M0FP38BeiLaDuo12cidr_2daudit5nginx16render__contexts(analysis, options.format));
      }
      case 5: {
        return _M0FP38BeiLaDuo12cidr_2daudit3cli8complete(0, _M0FP38BeiLaDuo12cidr_2daudit5nginx16render__analysis(analysis, options.format, undefined));
      }
      case 4: {
        const _p$3 = options.context_selector;
        let selector;
        if (_p$3 === undefined) {
          selector = $panic();
        } else {
          const _p$4 = _p$3;
          selector = _p$4;
        }
        const _bind$4 = _M0MP38BeiLaDuo12cidr_2daudit5nginx8Analysis7context(analysis, selector);
        let context;
        if (_bind$4.$tag === 1) {
          const _Ok = _bind$4;
          context = _Ok._0;
        } else {
          const _Err = _bind$4;
          const _error = _Err._0;
          return _M0FP38BeiLaDuo12cidr_2daudit3cli15config__failure(_error, options.format);
        }
        const _p$4 = options.ip;
        let _tmp$2;
        if (_p$4 === undefined) {
          _tmp$2 = $panic();
        } else {
          const _p$5 = _p$4;
          _tmp$2 = _p$5;
        }
        const _bind$5 = _M0MP38BeiLaDuo12cidr_2daudit5nginx13AccessContext5probe(context, _tmp$2);
        let result;
        if (_bind$5.$tag === 1) {
          const _Ok = _bind$5;
          result = _Ok._0;
        } else {
          const _Err = _bind$5;
          const _error = _Err._0;
          return _M0FP38BeiLaDuo12cidr_2daudit3cli15config__failure(_error, options.format);
        }
        return _M0FP38BeiLaDuo12cidr_2daudit3cli8complete(0, _M0FP38BeiLaDuo12cidr_2daudit5nginx13render__probe(result, options.format));
      }
      case 3: {
        const _bind$6 = options.context_selector;
        let audits;
        if (_bind$6 === undefined) {
          const _bind$7 = _M0MP38BeiLaDuo12cidr_2daudit5nginx8Analysis6audits(analysis);
          if (_bind$7.$tag === 1) {
            const _Ok = _bind$7;
            audits = _Ok._0;
          } else {
            const _Err = _bind$7;
            const _error = _Err._0;
            return _M0FP38BeiLaDuo12cidr_2daudit3cli15config__failure(_error, options.format);
          }
        } else {
          const _Some = _bind$6;
          const _selector = _Some;
          const _bind$7 = _M0MP38BeiLaDuo12cidr_2daudit5nginx8Analysis7context(analysis, _selector);
          let context$2;
          if (_bind$7.$tag === 1) {
            const _Ok = _bind$7;
            context$2 = _Ok._0;
          } else {
            const _Err = _bind$7;
            const _error = _Err._0;
            return _M0FP38BeiLaDuo12cidr_2daudit3cli15config__failure(_error, options.format);
          }
          const _bind$8 = _M0MP38BeiLaDuo12cidr_2daudit5nginx13AccessContext5audit(context$2);
          if (_bind$8.$tag === 1) {
            const _Ok = _bind$8;
            const _value = _Ok._0;
            audits = [_value];
          } else {
            const _Err = _bind$8;
            const _error = _Err._0;
            return _M0FP38BeiLaDuo12cidr_2daudit3cli15config__failure(_error, options.format);
          }
        }
        let gate_failed = false;
        const _bind$7 = _M0FP38BeiLaDuo12cidr_2daudit5nginx29check__report__budget_2einner(analysis, options.context_selector, options.limits.max_directives, audits);
        if (_bind$7.$tag === 1) {
        } else {
          const _Err = _bind$7;
          const _error = _Err._0;
          return _M0FP38BeiLaDuo12cidr_2daudit3cli15config__failure(_error, options.format);
        }
        const _bind$8 = audits.length;
        let _tmp$3 = 0;
        while (true) {
          const _ = _tmp$3;
          if (_ < _bind$8) {
            const audit = audits[_];
            if (audit.blocking) {
              return _M0FP38BeiLaDuo12cidr_2daudit3cli8complete(3, _M0FP38BeiLaDuo12cidr_2daudit5nginx14render__audits(analysis, audits, options.format, options.context_selector));
            }
            if (_M0MP38BeiLaDuo12cidr_2daudit5nginx12ContextAudit15critical__count(audit) > 0 || options.strict && _M0MP38BeiLaDuo12cidr_2daudit5nginx12ContextAudit14warning__count(audit) > 0) {
              gate_failed = true;
            }
            _tmp$3 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const exit_code = gate_failed ? 1 : 0;
        return _M0FP38BeiLaDuo12cidr_2daudit3cli8complete(exit_code, _M0FP38BeiLaDuo12cidr_2daudit5nginx14render__audits(analysis, audits, options.format, options.context_selector));
      }
      case 0: {
        break _L;
      }
      default: {
        break _L;
      }
    }
  }
  return _M0FP38BeiLaDuo12cidr_2daudit3cli8complete(0, "");
}
function _M0FP38BeiLaDuo12cidr_2daudit3cli14basic__options(command) {
  return new _M0TP38BeiLaDuo12cidr_2daudit3cli7Options(command, ".", "", undefined, undefined, "text", false, _M0MP38BeiLaDuo12cidr_2daudit5nginx6Limits7defaultN6recordS2671);
}
function _M0FP38BeiLaDuo12cidr_2daudit3cli13positive__int(value) {
  let result = 0;
  if (value === "") {
    return new _M0DTPC16result6ResultGiRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit3cli15argument__error("invalid_limit", "limit values must be positive integers"));
  }
  const _bind = _M0MPC16string6String9to__array(value);
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const character = _bind[_];
      const digit = character - 48 | 0;
      if (digit < 0 || (digit > 9 || result > ((2147483647 - digit | 0) / 10 | 0))) {
        return new _M0DTPC16result6ResultGiRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit3cli15argument__error("invalid_limit", `limit must fit a positive 32-bit integer: ${value}`));
      }
      result = (Math.imul(result, 10) | 0) + digit | 0;
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return result === 0 ? new _M0DTPC16result6ResultGiRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit3cli15argument__error("invalid_limit", "limit must be greater than zero")) : new _M0DTPC16result6ResultGiRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE2Ok(result);
}
function _M0FP38BeiLaDuo12cidr_2daudit3cli13parse__limits(text, base) {
  let parsed = base;
  const seen = [];
  const _it = _M0MPC16string6String5split(text, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit3cli13parse__limitsN7_2abindS3006, 0, _M0FP38BeiLaDuo12cidr_2daudit3cli13parse__limitsN7_2abindS3006.length));
  while (true) {
    const _bind = _M0MPB4Iter4nextGRPC16string10StringViewE(_it);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _assignment = _Some;
      const parts = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string10StringView5split(_assignment, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit3cli13parse__limitsN7_2abindS3007, 0, _M0FP38BeiLaDuo12cidr_2daudit3cli13parse__limitsN7_2abindS3007.length)));
      if (parts.length !== 2) {
        return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx6LimitsRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit3cli15argument__error("invalid_limit", "--limits requires comma-separated name=value assignments"));
      }
      const name = _M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGsE(parts, 0));
      if (_M0MPC15array5Array8containsGsE(seen, name)) {
        return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx6LimitsRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit3cli15argument__error("duplicate_limit", `limit appears more than once: ${name}`));
      }
      _M0MPC15array5Array4pushGsE(seen, name);
      const _bind$2 = _M0FP38BeiLaDuo12cidr_2daudit3cli13positive__int(_M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGsE(parts, 1)));
      let value;
      if (_bind$2.$tag === 1) {
        const _Ok = _bind$2;
        value = _Ok._0;
      } else {
        const _Err = _bind$2;
        const _error = _Err._0;
        return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx6LimitsRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE3Err(_error);
      }
      let _tmp;
      switch (name) {
        case "max_sources": {
          const _tmp$2 = parsed;
          _tmp = new _M0TP38BeiLaDuo12cidr_2daudit5nginx6Limits(value, _tmp$2.max_total_chars, _tmp$2.max_source_chars, _tmp$2.max_include_depth, _tmp$2.max_include_expansions, _tmp$2.max_context_depth, _tmp$2.max_directives, _tmp$2.max_contexts, _tmp$2.max_rules, _tmp$2.max_audit_pairs);
          break;
        }
        case "max_total_chars": {
          const _tmp$3 = parsed;
          _tmp = new _M0TP38BeiLaDuo12cidr_2daudit5nginx6Limits(_tmp$3.max_sources, value, _tmp$3.max_source_chars, _tmp$3.max_include_depth, _tmp$3.max_include_expansions, _tmp$3.max_context_depth, _tmp$3.max_directives, _tmp$3.max_contexts, _tmp$3.max_rules, _tmp$3.max_audit_pairs);
          break;
        }
        case "max_source_chars": {
          const _tmp$4 = parsed;
          _tmp = new _M0TP38BeiLaDuo12cidr_2daudit5nginx6Limits(_tmp$4.max_sources, _tmp$4.max_total_chars, value, _tmp$4.max_include_depth, _tmp$4.max_include_expansions, _tmp$4.max_context_depth, _tmp$4.max_directives, _tmp$4.max_contexts, _tmp$4.max_rules, _tmp$4.max_audit_pairs);
          break;
        }
        case "max_include_depth": {
          const _tmp$5 = parsed;
          _tmp = new _M0TP38BeiLaDuo12cidr_2daudit5nginx6Limits(_tmp$5.max_sources, _tmp$5.max_total_chars, _tmp$5.max_source_chars, value, _tmp$5.max_include_expansions, _tmp$5.max_context_depth, _tmp$5.max_directives, _tmp$5.max_contexts, _tmp$5.max_rules, _tmp$5.max_audit_pairs);
          break;
        }
        case "max_include_expansions": {
          const _tmp$6 = parsed;
          _tmp = new _M0TP38BeiLaDuo12cidr_2daudit5nginx6Limits(_tmp$6.max_sources, _tmp$6.max_total_chars, _tmp$6.max_source_chars, _tmp$6.max_include_depth, value, _tmp$6.max_context_depth, _tmp$6.max_directives, _tmp$6.max_contexts, _tmp$6.max_rules, _tmp$6.max_audit_pairs);
          break;
        }
        case "max_directives": {
          const _tmp$7 = parsed;
          _tmp = new _M0TP38BeiLaDuo12cidr_2daudit5nginx6Limits(_tmp$7.max_sources, _tmp$7.max_total_chars, _tmp$7.max_source_chars, _tmp$7.max_include_depth, _tmp$7.max_include_expansions, _tmp$7.max_context_depth, value, _tmp$7.max_contexts, _tmp$7.max_rules, _tmp$7.max_audit_pairs);
          break;
        }
        case "max_contexts": {
          const _tmp$8 = parsed;
          _tmp = new _M0TP38BeiLaDuo12cidr_2daudit5nginx6Limits(_tmp$8.max_sources, _tmp$8.max_total_chars, _tmp$8.max_source_chars, _tmp$8.max_include_depth, _tmp$8.max_include_expansions, _tmp$8.max_context_depth, _tmp$8.max_directives, value, _tmp$8.max_rules, _tmp$8.max_audit_pairs);
          break;
        }
        case "max_context_depth": {
          const _tmp$9 = parsed;
          _tmp = new _M0TP38BeiLaDuo12cidr_2daudit5nginx6Limits(_tmp$9.max_sources, _tmp$9.max_total_chars, _tmp$9.max_source_chars, _tmp$9.max_include_depth, _tmp$9.max_include_expansions, value, _tmp$9.max_directives, _tmp$9.max_contexts, _tmp$9.max_rules, _tmp$9.max_audit_pairs);
          break;
        }
        case "max_rules": {
          const _tmp$10 = parsed;
          _tmp = new _M0TP38BeiLaDuo12cidr_2daudit5nginx6Limits(_tmp$10.max_sources, _tmp$10.max_total_chars, _tmp$10.max_source_chars, _tmp$10.max_include_depth, _tmp$10.max_include_expansions, _tmp$10.max_context_depth, _tmp$10.max_directives, _tmp$10.max_contexts, value, _tmp$10.max_audit_pairs);
          break;
        }
        case "max_audit_pairs": {
          const _tmp$11 = parsed;
          _tmp = new _M0TP38BeiLaDuo12cidr_2daudit5nginx6Limits(_tmp$11.max_sources, _tmp$11.max_total_chars, _tmp$11.max_source_chars, _tmp$11.max_include_depth, _tmp$11.max_include_expansions, _tmp$11.max_context_depth, _tmp$11.max_directives, _tmp$11.max_contexts, _tmp$11.max_rules, value);
          break;
        }
        default: {
          return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx6LimitsRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit3cli15argument__error("unknown_limit", `unknown limit: ${name}`));
        }
      }
      parsed = _tmp;
      continue;
    }
  }
  return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit5nginx6LimitsRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE2Ok(parsed);
}
function _M0FP38BeiLaDuo12cidr_2daudit3cli11parse__args(args) {
  if (args.length === 0) {
    return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit3cli7OptionsRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE2Ok(_M0FP38BeiLaDuo12cidr_2daudit3cli14basic__options(0));
  }
  let command;
  _L: {
    _L$2: {
      _L$3: {
        _L$4: {
          const _bind = _M0MPC15array5Array2atGsE(args, 0);
          switch (_bind) {
            case "help": {
              break _L$4;
            }
            case "--help": {
              break _L$4;
            }
            case "-h": {
              break _L$4;
            }
            case "version": {
              break _L$2;
            }
            case "--version": {
              break _L$2;
            }
            case "contexts": {
              command = 2;
              break;
            }
            case "audit": {
              command = 3;
              break;
            }
            case "probe": {
              command = 4;
              break;
            }
            case "validate": {
              command = 5;
              break;
            }
            default: {
              return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit3cli7OptionsRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit3cli15argument__error("unknown_command", `unknown command: ${_bind}`));
            }
          }
          break _L$3;
        }
        command = 0;
      }
      break _L;
    }
    command = 1;
  }
  const defaults = _M0FP38BeiLaDuo12cidr_2daudit3cli14basic__options(command);
  if (_M0IP38BeiLaDuo12cidr_2daudit3cli7CommandPB2Eq5equal(command, 0) || _M0IP38BeiLaDuo12cidr_2daudit3cli7CommandPB2Eq5equal(command, 1)) {
    if (args.length !== 1) {
      return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit3cli7OptionsRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit3cli15argument__error("unexpected_argument", "help and version accept no arguments"));
    }
    return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit3cli7OptionsRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE2Ok(defaults);
  }
  const positionals = [];
  const seen = [];
  let input_root = defaults.input_root;
  let context_selector = undefined;
  let format = defaults.format;
  let strict = false;
  let limits = defaults.limits;
  let index = 1;
  while (true) {
    if (index < args.length) {
      const argument = _M0MPC15array5Array2atGsE(args, index);
      if (_M0MPC16string6String11has__prefix(argument, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit3cli11parse__argsN7_2abindS3024, 0, _M0FP38BeiLaDuo12cidr_2daudit3cli11parse__argsN7_2abindS3024.length))) {
        if (_M0MPC15array5Array8containsGsE(seen, argument)) {
          return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit3cli7OptionsRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit3cli15argument__error("duplicate_option", `option appears more than once: ${argument}`));
        }
        _M0MPC15array5Array4pushGsE(seen, argument);
        if (argument === "--strict") {
          if (_M0IP016_24default__implPB2Eq10not__equalGRP38BeiLaDuo12cidr_2daudit3cli7CommandE(command, 3)) {
            return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit3cli7OptionsRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit3cli15argument__error("invalid_option", "--strict is available only for audit"));
          }
          strict = true;
          index = index + 1 | 0;
          continue;
        }
        let _tmp;
        const _p = "--root";
        if (!(argument === _p)) {
          let _tmp$2;
          const _p$2 = "--context";
          if (!(argument === _p$2)) {
            let _tmp$3;
            const _p$3 = "--format";
            if (!(argument === _p$3)) {
              const _p$4 = "--limits";
              _tmp$3 = !(argument === _p$4);
            } else {
              _tmp$3 = false;
            }
            _tmp$2 = _tmp$3;
          } else {
            _tmp$2 = false;
          }
          _tmp = _tmp$2;
        } else {
          _tmp = false;
        }
        if (_tmp) {
          return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit3cli7OptionsRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit3cli15argument__error("unknown_option", `unknown option: ${argument}`));
        }
        if ((index + 1 | 0) >= args.length || _M0MPC16string6String11has__prefix(_M0MPC15array5Array2atGsE(args, index + 1 | 0), new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit3cli11parse__argsN7_2abindS3025, 0, _M0FP38BeiLaDuo12cidr_2daudit3cli11parse__argsN7_2abindS3025.length))) {
          return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit3cli7OptionsRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit3cli15argument__error("missing_value", `missing value for ${argument}`));
        }
        const value = _M0MPC15array5Array2atGsE(args, index + 1 | 0);
        if (value === "" || _M0MPC16string6String8contains(value, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit3cli11parse__argsN7_2abindS3026, 0, _M0FP38BeiLaDuo12cidr_2daudit3cli11parse__argsN7_2abindS3026.length))) {
          return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit3cli7OptionsRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit3cli15argument__error("invalid_value", `empty or NUL-containing value for ${argument}`));
        }
        switch (argument) {
          case "--root": {
            if (_M0MPC16string6String8contains(value, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit3cli11parse__argsN7_2abindS3027, 0, _M0FP38BeiLaDuo12cidr_2daudit3cli11parse__argsN7_2abindS3027.length))) {
              return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit3cli7OptionsRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit3cli15argument__error("invalid_root", "--root must name a local directory"));
            }
            input_root = value;
            break;
          }
          case "--context": {
            if (_M0IP016_24default__implPB2Eq10not__equalGRP38BeiLaDuo12cidr_2daudit3cli7CommandE(command, 3) && _M0IP016_24default__implPB2Eq10not__equalGRP38BeiLaDuo12cidr_2daudit3cli7CommandE(command, 4)) {
              return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit3cli7OptionsRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit3cli15argument__error("invalid_option", "--context is available only for audit and probe"));
            }
            context_selector = value;
            break;
          }
          case "--format": {
            let _tmp$2;
            const _p$2 = "text";
            if (!(value === _p$2)) {
              let _tmp$3;
              const _p$3 = "json";
              if (!(value === _p$3)) {
                const _p$4 = "markdown";
                _tmp$3 = !(value === _p$4);
              } else {
                _tmp$3 = false;
              }
              _tmp$2 = _tmp$3;
            } else {
              _tmp$2 = false;
            }
            if (_tmp$2) {
              return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit3cli7OptionsRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit3cli15argument__error("invalid_format", "format must be text, json, or markdown"));
            }
            format = value;
            break;
          }
          case "--limits": {
            const _bind = _M0FP38BeiLaDuo12cidr_2daudit3cli13parse__limits(value, limits);
            let _tmp$3;
            if (_bind.$tag === 1) {
              const _Ok = _bind;
              _tmp$3 = _Ok._0;
            } else {
              const _Err = _bind;
              const _error = _Err._0;
              return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit3cli7OptionsRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE3Err(_error);
            }
            limits = _tmp$3;
            break;
          }
        }
        index = index + 2 | 0;
      } else {
        _M0MPC15array5Array4pushGsE(positionals, argument);
        index = index + 1 | 0;
      }
      continue;
    } else {
      break;
    }
  }
  const expected = _M0IP38BeiLaDuo12cidr_2daudit3cli7CommandPB2Eq5equal(command, 4) ? 2 : 1;
  if (positionals.length !== expected) {
    return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit3cli7OptionsRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit3cli15argument__error("invalid_arguments", _M0IP38BeiLaDuo12cidr_2daudit3cli7CommandPB2Eq5equal(command, 4) ? "probe requires CONFIG IP and --context ID" : "command requires exactly one CONFIG path"));
  }
  const entry = _M0MPC15array5Array2atGsE(positionals, 0);
  const _bind = _M0FP38BeiLaDuo12cidr_2daudit3cli15validate__entry(entry);
  if (_bind.$tag === 0) {
    const _Err = _bind;
    const _error = _Err._0;
    return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit3cli7OptionsRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE3Err(_error);
  }
  if (_M0IP38BeiLaDuo12cidr_2daudit3cli7CommandPB2Eq5equal(command, 4)) {
    const _bind$2 = context_selector;
    if (_bind$2 === undefined) {
      return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit3cli7OptionsRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit3cli15argument__error("missing_context", "probe requires --context ID; use contexts to discover IDs"));
    }
  }
  return new _M0DTPC16result6ResultGRP38BeiLaDuo12cidr_2daudit3cli7OptionsRP38BeiLaDuo12cidr_2daudit3cli8CliErrorE2Ok(new _M0TP38BeiLaDuo12cidr_2daudit3cli7Options(command, input_root, entry, context_selector, _M0IP38BeiLaDuo12cidr_2daudit3cli7CommandPB2Eq5equal(command, 4) ? _M0MPC15array5Array2atGsE(positionals, 1) : undefined, format, strict, limits));
}
function _M0FP38BeiLaDuo12cidr_2daudit6fileio17parent__directory(path) {
  const parts = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPB4Iter3mapGRPC16string10StringViewsE(_M0MPC16string6String5split(path, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit6fileio17parent__directoryN7_2abindS3055, 0, _M0FP38BeiLaDuo12cidr_2daudit6fileio17parent__directoryN7_2abindS3055.length)), (view) => _M0MPC16string10StringView9to__owned(view)));
  _M0MPC15array5Array3popGsE(parts);
  return _M0MPC15array5Array4joinGsE(parts, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit6fileio17parent__directoryN7_2abindS3056, 0, _M0FP38BeiLaDuo12cidr_2daudit6fileio17parent__directoryN7_2abindS3056.length));
}
function _M0FP38BeiLaDuo12cidr_2daudit6fileio17io__error_2einner(code, message, path, line) {
  return new _M0TP38BeiLaDuo12cidr_2daudit5nginx11ConfigError(code, message, path, line);
}
function _M0FP38BeiLaDuo12cidr_2daudit6fileio17response__failure(value, path) {
  _L: {
    if (value.$tag === 6) {
      const _Object = value;
      const _x = _Object._0;
      const _x$2 = _M0MPB3Map3getGsRPB4JsonE(_x, "ok");
      if (_x$2 === undefined) {
        break _L;
      } else {
        const _Some = _x$2;
        const _x$3 = _Some;
        if (_x$3.$tag === 2) {
          const _x$4 = _M0MPB3Map3getGsRPB4JsonE(_x, "code");
          if (_x$4 === undefined) {
            break _L;
          } else {
            const _Some$2 = _x$4;
            const _x$5 = _Some$2;
            if (_x$5.$tag === 4) {
              const _String = _x$5;
              const _code = _String._0;
              const _x$6 = _M0MPB3Map3getGsRPB4JsonE(_x, "message");
              if (_x$6 === undefined) {
                break _L;
              } else {
                const _Some$3 = _x$6;
                const _x$7 = _Some$3;
                if (_x$7.$tag === 4) {
                  const _String$2 = _x$7;
                  const _message = _String$2._0;
                  return _M0FP38BeiLaDuo12cidr_2daudit6fileio17io__error_2einner(_code, _message, path, 0);
                } else {
                  break _L;
                }
              }
            } else {
              break _L;
            }
          }
        } else {
          break _L;
        }
      }
    } else {
      break _L;
    }
  }
  return _M0FP38BeiLaDuo12cidr_2daudit6fileio17io__error_2einner("internal_io", "Unexpected filesystem response", path, 0);
}
function _M0FP38BeiLaDuo12cidr_2daudit6fileio14response__json(text, path) {
  let _try_err;
  _L: {
    const _bind = _M0FPC14json13parse_2einner(_M0IPC16string6StringPB12ToStringView16to__string__view(text), 1024);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    return new _M0DTPC16result6ResultGRPB4JsonRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(_tmp);
  }
  return new _M0DTPC16result6ResultGRPB4JsonRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit6fileio17io__error_2einner("internal_io", "Invalid filesystem response", path, 0));
}
function _M0FP38BeiLaDuo12cidr_2daudit6fileio16directory__names(root, path, maximum) {
  const _bind = _M0FP38BeiLaDuo12cidr_2daudit6fileio14response__json(_M0FP38BeiLaDuo12cidr_2daudit6fileio19filesystem__request(root, "list", path, maximum), path);
  let value;
  if (_bind.$tag === 1) {
    const _Ok = _bind;
    value = _Ok._0;
  } else {
    const _Err = _bind;
    const _error = _Err._0;
    return new _M0DTPC16result6ResultGRPB5ArrayGsERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_error);
  }
  _L: {
    if (value.$tag === 6) {
      const _Object = value;
      const _x = _Object._0;
      const _x$2 = _M0MPB3Map3getGsRPB4JsonE(_x, "ok");
      if (_x$2 === undefined) {
        break _L;
      } else {
        const _Some = _x$2;
        const _x$3 = _Some;
        if (_x$3.$tag === 1) {
          const _x$4 = _M0MPB3Map3getGsRPB4JsonE(_x, "names");
          if (_x$4 === undefined) {
            break _L;
          } else {
            const _Some$2 = _x$4;
            const _x$5 = _Some$2;
            if (_x$5.$tag === 5) {
              const _Array = _x$5;
              const _names = _Array._0;
              const result = [];
              const _bind$2 = _names.length;
              let _tmp = 0;
              while (true) {
                const _ = _tmp;
                if (_ < _bind$2) {
                  const name = _names[_];
                  if (name.$tag === 4) {
                    const _String = name;
                    const _value = _String._0;
                    _M0MPC15array5Array4pushGsE(result, _value);
                  } else {
                    return new _M0DTPC16result6ResultGRPB5ArrayGsERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit6fileio17io__error_2einner("internal_io", "Non-string directory name", path, 0));
                  }
                  _tmp = _ + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              _M0MPC15array5Array4sortGsE(result);
              return new _M0DTPC16result6ResultGRPB5ArrayGsERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(result);
            } else {
              break _L;
            }
          }
        } else {
          break _L;
        }
      }
    } else {
      break _L;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGsERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit6fileio17response__failure(value, path));
}
function _M0FP38BeiLaDuo12cidr_2daudit6fileio16include__targets(state, operand, source, line) {
  const _bind = _M0FP38BeiLaDuo12cidr_2daudit5nginx22resolve__include__path(state.entry, operand);
  let pattern;
  if (_bind.$tag === 1) {
    const _Ok = _bind;
    pattern = _Ok._0;
  } else {
    const _Err = _bind;
    const _error = _Err._0;
    return new _M0DTPC16result6ResultGRPB5ArrayGsERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(new _M0TP38BeiLaDuo12cidr_2daudit5nginx11ConfigError(_error.code, _error.message, source, line));
  }
  if (!_M0MPC16string6String8contains(pattern, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit6fileio16include__targetsN7_2abindS3114, 0, _M0FP38BeiLaDuo12cidr_2daudit6fileio16include__targetsN7_2abindS3114.length)) && !_M0MPC16string6String8contains(pattern, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit6fileio16include__targetsN7_2abindS3115, 0, _M0FP38BeiLaDuo12cidr_2daudit6fileio16include__targetsN7_2abindS3115.length))) {
    return new _M0DTPC16result6ResultGRPB5ArrayGsERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok([pattern]);
  }
  const directory = _M0FP38BeiLaDuo12cidr_2daudit6fileio17parent__directory(pattern);
  const _bind$2 = _M0MPB3Map3getGsRPB5ArrayGsEE(state.directories, directory);
  let names;
  if (_bind$2.$tag === 1) {
    const _Some = _bind$2;
    names = _Some._0;
  } else {
    const _bind$3 = _M0FP38BeiLaDuo12cidr_2daudit6fileio16directory__names(state.root, directory, state.remaining_entries);
    let names$2;
    if (_bind$3.$tag === 1) {
      const _Ok = _bind$3;
      names$2 = _Ok._0;
    } else {
      const _Err = _bind$3;
      const _error = _Err._0;
      if (_error.code === "missing_source") {
        names$2 = [];
      } else {
        return new _M0DTPC16result6ResultGRPB5ArrayGsERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(new _M0TP38BeiLaDuo12cidr_2daudit5nginx11ConfigError(_error.code, _error.message, _error.path, line));
      }
    }
    state.remaining_entries = state.remaining_entries - names$2.length | 0;
    _M0MPB3Map3setGsRPB5ArrayGsEE(state.directories, directory, names$2);
    names = names$2;
  }
  const targets = [];
  const _bind$3 = names.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const name = names[_];
      const candidate = directory === "" ? name : `${directory}/${name}`;
      if (_M0FP38BeiLaDuo12cidr_2daudit5nginx22include__path__matches(pattern, candidate)) {
        _M0MPC15array5Array4pushGsE(targets, candidate);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (targets.length > (state.limits.max_sources - state.sources.length | 0)) {
    let new_count = 0;
    const _bind$4 = targets.length;
    let _tmp$2 = 0;
    while (true) {
      const _ = _tmp$2;
      if (_ < _bind$4) {
        const target = targets[_];
        const _p = state.sources;
        let _tmp$3;
        let _p$2;
        _L: {
          _L$2: {
            const _p$3 = _p.length;
            let _tmp$4 = 0;
            while (true) {
              const _p$4 = _tmp$4;
              if (_p$4 < _p$3) {
                const _p$5 = _p[_p$4];
                if (_p$5.path === target) {
                  _p$2 = true;
                  break _L$2;
                }
                _tmp$4 = _p$4 + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            _tmp$3 = false;
            break _L;
          }
          _tmp$3 = _p$2;
        }
        if (!_tmp$3) {
          new_count = new_count + 1 | 0;
        }
        _tmp$2 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (new_count > (state.limits.max_sources - state.sources.length | 0)) {
      return new _M0DTPC16result6ResultGRPB5ArrayGsERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit6fileio17io__error_2einner("limit_exceeded", "Include mask exceeds source count budget", source, line));
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGsERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(targets);
}
function _M0FP38BeiLaDuo12cidr_2daudit6fileio12read__source(root, path, maximum) {
  const _bind = _M0FP38BeiLaDuo12cidr_2daudit6fileio14response__json(_M0FP38BeiLaDuo12cidr_2daudit6fileio19filesystem__request(root, "read", path, maximum), path);
  let value;
  if (_bind.$tag === 1) {
    const _Ok = _bind;
    value = _Ok._0;
  } else {
    const _Err = _bind;
    const _error = _Err._0;
    return new _M0DTPC16result6ResultGsRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_error);
  }
  _L: {
    if (value.$tag === 6) {
      const _Object = value;
      const _x = _Object._0;
      const _x$2 = _M0MPB3Map3getGsRPB4JsonE(_x, "ok");
      if (_x$2 === undefined) {
        break _L;
      } else {
        const _Some = _x$2;
        const _x$3 = _Some;
        if (_x$3.$tag === 1) {
          const _x$4 = _M0MPB3Map3getGsRPB4JsonE(_x, "content");
          if (_x$4 === undefined) {
            break _L;
          } else {
            const _Some$2 = _x$4;
            const _x$5 = _Some$2;
            if (_x$5.$tag === 4) {
              const _String = _x$5;
              const _content = _String._0;
              return new _M0DTPC16result6ResultGsRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(_content);
            } else {
              break _L;
            }
          }
        } else {
          break _L;
        }
      }
    } else {
      break _L;
    }
  }
  return new _M0DTPC16result6ResultGsRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit6fileio17response__failure(value, path));
}
function _M0FP38BeiLaDuo12cidr_2daudit6fileio17collect__includes(state, nodes, source, include_depth) {
  const _bind = nodes.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const node = nodes[_];
      if (node.name === "include" && !(node.name === "#")) {
        if (node.has_block || node.args.length !== 1) {
          return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit6fileio17io__error_2einner("invalid_include", "include requires exactly one path and no block", source, node.line));
        }
        const _bind$2 = _M0FP38BeiLaDuo12cidr_2daudit6fileio16include__targets(state, _M0MPC15array5Array2atGsE(node.args, 0), source, node.line);
        let targets;
        if (_bind$2.$tag === 1) {
          const _Ok = _bind$2;
          targets = _Ok._0;
        } else {
          const _Err = _bind$2;
          const _error = _Err._0;
          return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_error);
        }
        const _bind$3 = targets.length;
        let _tmp$2 = 0;
        while (true) {
          const _$2 = _tmp$2;
          if (_$2 < _bind$3) {
            const target = targets[_$2];
            const _bind$4 = _M0FP38BeiLaDuo12cidr_2daudit6fileio12load__source(state, target, include_depth + 1 | 0);
            if (_bind$4.$tag === 1) {
            } else {
              const _Err = _bind$4;
              const _error = _Err._0;
              if (_error.code === "missing_source") {
                return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit6fileio17io__error_2einner("missing_include", `Included file is absent: ${target}`, source, node.line));
              } else {
                return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_error);
              }
            }
            _tmp$2 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      } else {
        if (node.has_block) {
          const _bind$2 = _M0FP38BeiLaDuo12cidr_2daudit6fileio17collect__includes(state, node.children, source, include_depth);
          if (_bind$2.$tag === 1) {
          } else {
            const _Err = _bind$2;
            const _error = _Err._0;
            return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_error);
          }
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(undefined);
}
function _M0FP38BeiLaDuo12cidr_2daudit6fileio12load__source(state, path, include_depth) {
  const _p = state.sources;
  let _tmp;
  let _p$2;
  _L: {
    _L$2: {
      const _p$3 = _p.length;
      let _tmp$2 = 0;
      while (true) {
        const _p$4 = _tmp$2;
        if (_p$4 < _p$3) {
          const _p$5 = _p[_p$4];
          if (_p$5.path === path) {
            _p$2 = true;
            break _L$2;
          }
          _tmp$2 = _p$4 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = false;
      break _L;
    }
    _tmp = _p$2;
  }
  if (_tmp) {
    return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(undefined);
  }
  if (include_depth > state.limits.max_include_depth) {
    return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit6fileio17io__error_2einner("limit_exceeded", "Include nesting exceeds its budget", path, 0));
  }
  if (state.sources.length >= state.limits.max_sources) {
    return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit6fileio17io__error_2einner("limit_exceeded", "Source count exceeds its budget", path, 0));
  }
  const _p$3 = state.limits.max_source_chars;
  const _p$4 = state.remaining_chars;
  const maximum = _p$3 < _p$4 ? _p$3 : _p$4;
  const _bind = _M0FP38BeiLaDuo12cidr_2daudit6fileio12read__source(state.root, path, maximum);
  let content;
  if (_bind.$tag === 1) {
    const _Ok = _bind;
    content = _Ok._0;
  } else {
    const _Err = _bind;
    const _error = _Err._0;
    return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_error);
  }
  if (content.length > state.remaining_chars) {
    return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit6fileio17io__error_2einner("limit_exceeded", "Source bundle exceeds total character budget", path, 0));
  }
  const source = new _M0TP38BeiLaDuo12cidr_2daudit5nginx10SourceFile(path, content);
  const _bind$2 = _M0FP38BeiLaDuo12cidr_2daudit5nginx19parse__source__file(source, state.limits);
  let nodes;
  if (_bind$2.$tag === 1) {
    const _Ok = _bind$2;
    nodes = _Ok._0;
  } else {
    const _Err = _bind$2;
    const _error = _Err._0;
    return new _M0DTPC16result6ResultGuRP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_error);
  }
  state.remaining_chars = state.remaining_chars - content.length | 0;
  _M0MPC15array5Array4pushGsE(state.sources, source);
  return _M0FP38BeiLaDuo12cidr_2daudit6fileio17collect__includes(state, nodes, path, include_depth);
}
function _M0FP38BeiLaDuo12cidr_2daudit6fileio13load__sources(root, entry, limits) {
  if (root === "") {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx10SourceFileERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit6fileio17io__error_2einner("invalid_root", "Input root cannot be empty", "", 0));
  }
  const _bind = _M0FP38BeiLaDuo12cidr_2daudit5nginx23normalize__source__path(entry);
  let normalized;
  if (_bind.$tag === 1) {
    const _Ok = _bind;
    normalized = _Ok._0;
  } else {
    const _Err = _bind;
    const _error = _Err._0;
    return new _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx10SourceFileERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_error);
  }
  if (_M0MPC16string6String11has__prefix(normalized, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit6fileio13load__sourcesN7_2abindS3204, 0, _M0FP38BeiLaDuo12cidr_2daudit6fileio13load__sourcesN7_2abindS3204.length)) || _M0MPC16string6String8contains(normalized, new _M0TPC16string10StringView(_M0FP38BeiLaDuo12cidr_2daudit6fileio13load__sourcesN7_2abindS3205, 0, _M0FP38BeiLaDuo12cidr_2daudit6fileio13load__sourcesN7_2abindS3205.length))) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx10SourceFileERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_M0FP38BeiLaDuo12cidr_2daudit6fileio17io__error_2einner("invalid_entry", "CONFIG must be relative to --root", entry, 0));
  }
  const _bind$2 = _M0FP38BeiLaDuo12cidr_2daudit5nginx19parse__source__file(new _M0TP38BeiLaDuo12cidr_2daudit5nginx10SourceFile(normalized, ""), limits);
  if (_bind$2.$tag === 1) {
  } else {
    const _Err = _bind$2;
    const _error = _Err._0;
    return new _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx10SourceFileERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_error);
  }
  const _tmp = [];
  const _bind$3 = [];
  const state = new _M0TP38BeiLaDuo12cidr_2daudit6fileio9LoadState(root, normalized, limits, _tmp, _M0MPB3Map3MapGsRPB5ArrayGsEE(new _M0TPB9ArrayViewGUsRPB5ArrayGsEEE(_bind$3, 0, 0), undefined), limits.max_total_chars, limits.max_directives);
  const _bind$4 = _M0FP38BeiLaDuo12cidr_2daudit6fileio12load__source(state, normalized, 0);
  if (_bind$4.$tag === 1) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx10SourceFileERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE2Ok(state.sources);
  } else {
    const _Err = _bind$4;
    const _error = _Err._0;
    return new _M0DTPC16result6ResultGRPB5ArrayGRP38BeiLaDuo12cidr_2daudit5nginx10SourceFileERP38BeiLaDuo12cidr_2daudit5nginx11ConfigErrorE3Err(_error);
  }
}
function _M0FP48BeiLaDuo12cidr_2daudit3cmd11nginx_2dcli13file__failure(error, format) {
  const code = error.code === "limit_exceeded" ? 4 : _M0MPC16string6String11has__prefix(error.code, new _M0TPC16string10StringView(_M0FP48BeiLaDuo12cidr_2daudit3cmd11nginx_2dcli13file__failureN7_2abindS3222, 0, _M0FP48BeiLaDuo12cidr_2daudit3cmd11nginx_2dcli13file__failureN7_2abindS3222.length)) ? 3 : 2;
  _M0FP48BeiLaDuo12cidr_2daudit3cmd11nginx_2dcli6finish(code, "", _M0FP38BeiLaDuo12cidr_2daudit5nginx13render__error(error, format));
}
(() => {
  const argument_list = [];
  const _bind = _M0FP48BeiLaDuo12cidr_2daudit3cmd11nginx_2dcli9arguments();
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const value = _bind[_];
      _M0MPC15array5Array4pushGsE(argument_list, value);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$3 = _M0FP38BeiLaDuo12cidr_2daudit3cli11parse__args(argument_list);
  let options;
  if (_bind$3.$tag === 1) {
    const _Ok = _bind$3;
    options = _Ok._0;
  } else {
    const _Err = _bind$3;
    const _error = _Err._0;
    _M0FP48BeiLaDuo12cidr_2daudit3cmd11nginx_2dcli6finish(2, "", `${_error.code}: ${_error.message}`);
    return;
  }
  let sources;
  if (_M0IP38BeiLaDuo12cidr_2daudit3cli7CommandPB2Eq5equal(options.command, 0) || _M0IP38BeiLaDuo12cidr_2daudit3cli7CommandPB2Eq5equal(options.command, 1)) {
    sources = [];
  } else {
    const _bind$4 = _M0FP38BeiLaDuo12cidr_2daudit6fileio13load__sources(options.input_root, options.entry, options.limits);
    if (_bind$4.$tag === 1) {
      const _Ok = _bind$4;
      sources = _Ok._0;
    } else {
      const _Err = _bind$4;
      const _error = _Err._0;
      _M0FP48BeiLaDuo12cidr_2daudit3cmd11nginx_2dcli13file__failure(_error, options.format);
      return;
    }
  }
  const result = _M0FP38BeiLaDuo12cidr_2daudit3cli3run(options, sources);
  _M0FP48BeiLaDuo12cidr_2daudit3cmd11nginx_2dcli6finish(result.exit_code, result.stdout, result.stderr);
})();
