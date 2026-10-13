///|
/// Explicit public trait extensions preserve the existing API on MoonBit 0.10.15.

///|
pub extend AggregationReport with @debug.Debug::{to_repr}

///|
pub extend Severity with Eq::{equal, not_equal}

///|
pub extend Severity with @debug.Debug::{to_repr}

///|
pub extend FindingKind with Eq::{equal, not_equal}

///|
pub extend FindingKind with @debug.Debug::{to_repr}

///|
pub extend Finding with Eq::{equal, not_equal}

///|
pub extend Finding with @debug.Debug::{to_repr}

///|
pub extend Decision with Eq::{equal, not_equal}

///|
pub extend Decision with @debug.Debug::{to_repr}

///|
pub extend AuditReport with @debug.Debug::{to_repr}

///|
pub extend RuleSet with @debug.Debug::{to_repr}

///|
pub extend CidrBlock with Eq::{equal, not_equal}

///|
pub extend CidrBlock with @debug.Debug::{to_repr}

///|
pub extend RuleChangeKind with Eq::{equal, not_equal}

///|
pub extend RuleChangeKind with @debug.Debug::{to_repr}

///|
pub extend RuleChange with Eq::{equal, not_equal}

///|
pub extend RuleChange with @debug.Debug::{to_repr}

///|
pub extend DiffReport with @debug.Debug::{to_repr}

///|
pub extend CoverageStats with Eq::{equal, not_equal}

///|
pub extend CoverageStats with @debug.Debug::{to_repr}

///|
pub extend GatePolicy with Eq::{equal, not_equal}

///|
pub extend GatePolicy with @debug.Debug::{to_repr}

///|
pub extend GateReason with Eq::{equal, not_equal}

///|
pub extend GateReason with @debug.Debug::{to_repr}

///|
pub extend GateResult with @debug.Debug::{to_repr}

///|
pub extend HintKind with Eq::{equal, not_equal}

///|
pub extend HintKind with @debug.Debug::{to_repr}

///|
pub extend FixHint with Eq::{equal, not_equal}

///|
pub extend FixHint with @debug.Debug::{to_repr}

///|
pub extend ImportFormat with Eq::{equal, not_equal}

///|
pub extend ImportFormat with @debug.Debug::{to_repr}

///|
pub extend ImportIssueLevel with Eq::{equal, not_equal}

///|
pub extend ImportIssueLevel with @debug.Debug::{to_repr}

///|
pub extend ImportIssue with Eq::{equal, not_equal}

///|
pub extend ImportIssue with @debug.Debug::{to_repr}

///|
pub extend ImportReport with @debug.Debug::{to_repr}

///|
pub extend IPv4 with Eq::{equal, not_equal}

///|
pub extend IPv4 with @debug.Debug::{to_repr}

///|
pub extend AuditPolicy with Eq::{equal, not_equal}

///|
pub extend AuditPolicy with @debug.Debug::{to_repr}

///|
pub extend AddressRange with Eq::{equal, not_equal}

///|
pub extend AddressRange with @debug.Debug::{to_repr}

///|
pub extend RuleAction with Eq::{equal, not_equal}

///|
pub extend RuleAction with @debug.Debug::{to_repr}

///|
pub extend Rule with Eq::{equal, not_equal}

///|
pub extend Rule with @debug.Debug::{to_repr}
