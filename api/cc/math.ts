export interface CCMathNamespace {
  Vec3: CCVec3Namespace;

  vec3(x: number, y: number, z: number): CCVec3;

  vec3Cross(v1: CCVec3, v2: CCVec3): CCVec3;

  vec3Dot(v1: CCVec3, v2: CCVec3): number;

  vec3Length(v: CCVec3): number;

  vec3Normalize(v: CCVec3): CCVec3;

  vec3Add(v1: CCVec3, v2: CCVec3): CCVec3;

  vec3Sub(v1: CCVec3, v2: CCVec3): CCVec3;

  Quaternion: CCQuaternionNamespace;

  quaternion(xOrAxis: number | CCVec3, yOrAngle: number, z: number, w?: number): CCQuaternion;

  AABB: CCAABBNamespace;

  aabb(min: CCVec3, max: CCVec3): CCAABB;

  aabbGetCorners(aabb: CCAABB): [CCVec3, CCVec3, CCVec3, CCVec3, CCVec3, CCVec3, CCVec3, CCVec3];

  OBB: CCOBBNamespace;

  obb(aabb: CCAABB): CCOBB;

  Ray: CCRayNamespace;

  ray(origin: CCVec3, direction: CCVec3): CCRay;

  Vec4: CCVec4Namespace;

  vec4(x: number, y: number, z: number, w: number): CCVec4;
}

export type CCVec3Namespace = {
  new (x?: number, y?: number, z?: number): CCVec3;
};

export interface CCVec3 {
  x: number;
  y: number;
  z: number;

  normalize(): void;
}

export type CCQuaternionNamespace = {
  new (x?: number, y?: number, z?: number, w?: number): CCQuaternion;
};

export interface CCQuaternion {
  x: number;
  y: number;
  z: number;
  w: number;
}

export type CCAABBNamespace = {
  new (min?: CCVec3, max?: CCVec3): CCAABB;
};

export interface CCAABB {
  min: CCVec3;
  max: CCVec3;
}

export type CCOBBNamespace = {
  new (aabb: CCAABB): CCOBB;
};

export interface CCOBB {
  center: CCVec3;
  xAxis: CCVec3;
  yAxis: CCVec3;
  zAxis: CCVec3;
  extents: CCVec3;
  extentX: CCVec3;
  extentY: CCVec3;
  extentZ: CCVec3;
}

export type CCRayNamespace = {
  new (origin?: CCVec3, direction?: CCVec3): CCRay;
};

export interface CCRay {
  origin: CCVec3;
  direction: CCVec3;
}

export type CCVec4Namespace = CCQuaternionNamespace;

export type CCVec4 = CCQuaternion;
