// Add more constants here as needed
import { getBackendUrl } from "src/config";

export const AppBranding = "Stage";

const backendBaseUrl = getBackendUrl();

export const API_URL = backendBaseUrl;
export const MAX_RESULTS = 10;
export const DEFAULT_TIMEOUT = 5000;

// Debezium color constants
export const BrandColors = {
  green: "#a5c82d",
  lightGreen: "#7fc5a5",
  teal: "#58b2da"
};

// Application color constants
export const AppColors = {
  dark: "#292929",
  darkBlue: "#4f6c87",
  white: "#ffffff"
};

// Application constant strings
export const AppStrings = {
  source: "source",
  destination: "destination",
  pipeline: "pipeline"
};

export const data = {
  data1:
    'Copying system trust bundle\nWaiting for port :6443 to be released.\nI0223 20:04:25.084507       1 loader.go:379] Config loaded from file:  /etc/kubernetes/static-pod-resources/configmaps/kube-apiserver-cert-syncer-kubeconfig/kubeconfig\nCopying termination logs to "/var/log/kube-apiserver/termination.log"\nI0223 20:04:25.087543       1 main.go:124] Touching termination lock file "/var/log/kube-apiserver/.terminating"\nI0223 20:04:25.088797       1 main.go:182] Launching sub-process "/usr/bin/hyperkube kube-apiserver --openshift-config=/etc/kubernetes/static-pod-resources/configmaps/config/config.yaml --advertise-address=10.0.171.12 -v=2 --permit-address-sharing"\nFlag --openshift-config has been deprecated, to be removed\nI0223 20:04:25.238681      17 plugins.go:84] Registered admission plugin "authorization.openshift.io/RestrictSubjectBindings"\nI0223 20:04:25.238763      17 plugins.go:84] Registered admission plugin "image.openshift.io/ImagePolicy"\nI0223 20:04:25.238775      17 plugins.go:84] Registered admission plugin "route.openshift.io/IngressAdmission"\nI0223 20:04:25.238783      17 plugins.go:84] Registered admission plugin "scheduling.openshift.io/OriginPodNodeEnvironment"\nI0223 20:04:25.238792      17 plugins.go:84] Registered admission plugin "autoscaling.openshift.io/ClusterResourceOverride"\nI0223 20:04:25.238801      17 plugins.go:84] Registered admission plugin "quota.openshift.io/ClusterResourceQuota"\nI0223 20:04:25.238810      17 plugins.go:84] Registered admission plugin "autoscaling.openshift.io/RunOnceDuration"\nI0223 20:04:25.238819      17 plugins.go:84] Registered admission plugin "scheduling.openshift.io/PodNodeConstraints"\nI0223 20:04:25.238829      17 plugins.go:84] Registered admission plugin "security.openshift.io/SecurityContextConstraint"\nI0223 20:04:25.238838      17 plugins.go:84] Registered admission plugin "security.openshift.io/SCCExecRestrictions"\nI0223 20:04:25.238846      17 plugins.go:84] Registered admission plugin "network.openshift.io/ExternalIPRanger"\nI0223 20:04:25.238856      17 plugins.go:84] Registered admission plugin "network.openshift.io/RestrictedEndpointsAdmission"\nI0223 20:04:25.238873      17 plugins.go:84] Registered admission plugin "config.openshift.io/ValidateAPIServer"\nI0223 20:04:25.238883      17 plugins.go:84] Registered admission plugin "config.openshift.io/ValidateAuthentication"\nI0223 20:04:25.238892      17 plugins.go:84] Registered admission plugin "config.openshift.io/ValidateFeatureGate"\nI0223 20:04:25.238952      17 plugins.go:84] Registered admission plugin "config.openshift.io/ValidateConsole"\nI0223 20:04:25.238966      17 plugins.go:84] Registered admission plugin "config.openshift.io/ValidateImage"\nI0223 20:04:25.238975      17 plugins.go:84] Registered admission plugin "config.openshift.io/ValidateOAuth"\nI0223 20:04:25.238991      17 plugins.go:84] Registered admission plugin "config.openshift.io/ValidateProject"\nI0223 20:04:25.239003      17 plugins.go:84] Registered admission plugin "config.openshift.io/DenyDeleteClusterConfiguration"\nI0223 20:04:25.239014      17 plugins.go:84] Registered admission plugin "config.openshift.io/ValidateScheduler"\nI0223 20:04:25.239025      17 plugins.go:84] Registered admission plugin "quota.openshift.io/ValidateClusterResourceQuota"\nI0223 20:04:25.239035      17 plugins.go:84] Registered admission plugin "security.openshift.io/ValidateSecurityContextConstraints"\nI0223 20:04:25.239046      17 plugins.go:84] Registered admission plugin "authorization.openshift.io/ValidateRoleBindingRestriction"\nI0223 20:04:25.239056      17 plugins.go:84] Registered admission plugin "config.openshift.io/ValidateNetwork"\nI0223 20:04:25.239065      17 plugins.go:84] Registered admission plugin "security.openshift.io/DefaultSecurityContextConstraints"\nI0223 20:04:25.243294      17 feature_gate.go:244] feature gates: &{map[APIPriorityAndFairness:true]}\nI0223 20:04:25.243381      17 feature_gate.go:244] feature gates: &{map[APIPriorityAndFairness:true RotateKubeletServerCertificate:true]}\nW0223 20:04:25.243488      17 feature_gate.go:236] Setting GA feature gate SupportPodPidsLimit=true. It will be removed in a future release.\nI0223 20:04:25.243540      17 feature_gate.go:244] feature gates: &{map[APIPriorityAndFairness:true RotateKubeletServerCertificate:true SupportPodPidsLimit:true]}\nI0223 20:04:25.243629      17 feature_gate.go:244] feature gates: &{map[APIPriorityAndFairness:true NodeDisruptionExclusion:true RotateKubeletServerCertificate:true SupportPodPidsLimit:true]}\nI0223 20:04:25.243709      17 feature_gate.go:244] feature gates: &{map[APIPriorityAndFairness:true NodeDisruptionExclusion:true RotateKubeletServerCertificate:true ServiceNodeExclusion:true SupportPodPidsLimit:true]}\nW0223 20:04:25.243803      17 feature_gate.go:236] Setting GA feature gate SCTPSupport=true. It will be removed in a future release.\nI0223 20:04:25.243846      17 feature_gate.go:244] feature gates: &{map[APIPriorityAndFairness:true NodeDisruptionExclusion:true RotateKubeletServerCertificate:true SCTPSupport:true ServiceNodeExclusion:true SupportPodPidsLimit:true]}\nI0223 20:04:25.243962      17 feature_gate.go:244] feature gates: &{map[APIPriorityAndFairness:true LegacyNodeRoleBehavior:false NodeDisruptionExclusion:true RotateKubeletServerCertificate:true SCTPSupport:true ServiceNodeExclusion:true SupportPodPidsLimit:true]}\nFlag --openshift-config has been deprecated, to be removed\nFlag --enable-logs-handler has been deprecated, This flag will be removed in v1.19\nFlag --enable-swagger-ui has been deprecated, swagger 1.2 support has been removed\nFlag --insecure-port has been deprecated, This flag has no effect now and will be removed in v1.24.\nFlag --kubelet-https has been deprecated, API Server connections to kubelets always use https. This flag will be removed in 1.22.\nFlag --kubelet-read-only-port has been deprecated, kubelet-read-only-port is deprecated and will be removed.\nI0223 20:04:25.244167      17 flags.go:59] FLAG: --add-dir-header="false"\nI0223 20:04:25.244184      17 flags.go:59] FLAG: --address="127.0.0.1"\nI0223 20:04:25.244196      17 flags.go:59] FLAG: --admission-control="[]"\nI0223 20:04:25.244213      17 flags.go:59] FLAG: --admission-control-config-file="/tmp/kubeapiserver-admission-config.yaml487454417"\nI0223 20:04:25.244224      17 flags.go:59] FLAG: --advertise-address="10.0.171.12"\nI0223 20:04:25.244234      17 flags.go:59] FLAG: --allow-privileged="true"\nI0223 20:04:25.244251      17 flags.go:59] FLAG: --alsologtostderr="false"\nI0223 20:04:25.244261      17 flags.go:59] FLAG: --anonymous-auth="true"\nI0223 20:04:25.244302      17 flags.go:59] FLAG: --api-audiences="[https://kubernetes.default.svc]"\nI0223 20:04:25.244317      17 flags.go:59] FLAG: --apiserver-count="1"\nI0223 20:04:25.244327      17 flags.go:59] FLAG: --audit-log-batch-buffer-size="10000"\nI0223 20:04:25.244336      17 flags.go:59] FLAG: --audit-log-batch-max-size="1"\nI0223 20:04:25.244343      17 flags.go:59] FLAG: --audit-log-batch-max-wait="0s"\nI0223 20:04:25.244354      17 flags.go:59] FLAG: --audit-log-batch-throttle-burst="0"\nI0223 20:04:25.244362      17 flags.go:59] FLAG: --audit-log-batch-throttle-enable="false"\nI0223 20:04:25.244371      17 flags.go:59] FLAG: --audit-log-batch-throttle-qps="0"\nI0223 20:04:25.244382      17 flags.go:59] FLAG: --audit-log-compress="false"\nI0223 20:04:25.244390      17 flags.go:59] FLAG: --audit-log-format="json"\nI0223 20:04:25.244398      17 flags.go:59] FLAG: --audit-log-maxage="0"\nI0223 20:04:25.244407      17 flags.go:59] FLAG: --audit-log-maxbackup="10"\nI0223 20:04:25.244414      17 flags.go:59] FLAG: --audit-log-maxsize="100"\nI0223 20:04:25.244423      17 flags.go:59] FLAG: --audit-log-mode="blocking"\nI0223 20:04:25.244430      17 flags.go:59] FLAG: --audit-log-path="/var/log/kube-apiserver/audit.log"\nI0223 20:04:25.244438      17 flags.go:59] FLAG: --audit-log-truncate-enabled="false"\nI0223 20:04:25.244445      17 flags.go:59] FLAG: --audit-log-truncate-max-batch-size="10485760"\nI0223 20:04:25.244458      17 flags.go:59] FLAG: --audit-log-truncate-max-event-size="102400"\nI0223 20:04:25.244466      17 flags.go:59] FLAG: --audit-log-version="audit.k8s.io/v1"\nI0223 20:04:25.244475      17 flags.go:59] FLAG: --audit-policy-file="/etc/kubernetes/static-pod-resources/configmaps/kube-apiserver-audit-policies/default.yaml"\nI0223 20:04:25.244490      17 flags.go:59] FLAG: --audit-webhook-batch-buffer-size="10000"\nI0223 20:04:25.244499      17 flags.go:59] FLAG: --audit-webhook-batch-initial-backoff="10s"\nI0223 20:04:25.244509      17 flags.go:59] FLAG: --audit-webhook-batch-max-size="400"\nI0223 20:04:25.244518      17 flags.go:59] FLAG: --audit-webhook-batch-max-wait="30s"\nI0223 20:04:25.244526      17 flags.go:59] FLAG: --audit-webhook-batch-throttle-burst="15"\nI0223 20:04:25.244533      17 flags.go:59] FLAG: --audit-webhook-batch-throttle-enable="true"',
}