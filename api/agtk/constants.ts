/**
 *
 */
export type AgtkConstants = {
  actionCommands: {
    ObjectByType: 0;
    ObjectByGroup: 0;
    ObjectById: 1;
    ProjectCommon: 0;
    UnsetObject: -1;
    SelfObject: -2;
    OtherThanSelfObject: -3;
    ChildObject: -4;
    LockedObject: -5;
    TouchedObject: -6;
    ParentObject: -7;
    AccordingToMoveDirection: -2;
    commandBehavior: {
      CommandBehaviorNext: 0;
      CommandBehaviorLoop: 1;
      CommandBehaviorBlock: 2;
      CommandBehaviorBreak: 3;
    };
    priorityType: {
      PriorityBackground: 0;
      PriorityMostFront: 1;
      PriorityMostFrontWithMenu: 2;
    };
    templateMove: {
      MoveHorizontal: 0;
      MoveVertical: 1;
      MoveBound: 2;
      MoveRandom: 3;
      MoveNearObject: 4;
      MoveNearPlayer: 4;
      MoveApartNearObject: 5;
      MoveApartNearPlayer: 5;
      MoveStop: 6;
    };
    objectLock: {
      SetByObjectGroup: 0;
      SetByObject: 1;
      UseSwitch: 0;
      UseVariable: 1;
      UseNone: 2;
      CompareValueConstant: 0;
      CompareValueOtherVariable: 1;
      CompareValueNonNumeric: 2;
    };
    objectCreate: {
      PositionCenter: 0;
      PositionLockObjectCenter: 1;
    };
    objectChange: {
      PositionCenter: 0;
      PositionLockObjectCenter: 1;
    };
    objectMove: {
      MoveWithDirection: 0;
      MoveToPosition: 1;
      MoveToObjectCenter: 2;
      MoveToObjectOrigin: 3;
      MoveToObjectConnectionPoint: 4;
      TargettingByType: 0;
      TargettingByGroup: 0;
      TargettingById: 1;
      TargettingTouched: 2;
      TargettingLocked: 3;
    };
    objectPushPull: {
      DirectionAngle: 0;
      DirectionObjectDisp: 1;
      EffectDirectionAngle: 0;
      EffectDirectionObjectDisp: 1;
      EffectDirectionObjectConnect: 2;
      TargettingByType: 0;
      TargettingByGroup: 0;
      TargettingById: 1;
      TargettingTouched: 2;
      TargettingLocked: 3;
    };
    attackSetting: {
      AttributeNone: 0;
      AttributePreset: 1;
      AttributeValue: 2;
    };
    sceneRotateFlip: {
      TypeReset: 0;
      TypeRotationFlip: 1;
    };
    soundPlay: {
      SoundSe: 0;
      SoundVoice: 1;
      SoundBgm: 2;
    };
    soundStop: {
      SoundSe: 0;
      SoundVoice: 1;
      SoundBgm: 2;
    };
    soundPositionRemember: {
      SoundSe: 0;
      SoundVoice: 1;
      SoundBgm: 2;
    };
    messageShow: {
      WindowNone: -1;
      WindowTemplate: 0;
      WindowImage: 1;
      TemplateWhiteFrame: 0;
      TemplateBlack: 1;
      TemplateWhite: 2;
      PositionCenter: 0;
      PositionLockObjectCenter: 1;
      PositionScenePosition: 2;
      HorzAlignLeft: 0;
      HorzAlignCenter: 1;
      HorzAlignRight: 2;
      VertAlignTop: 0;
      VertAlignCenter: 1;
      VertAlignBottom: 2;
    };
    scrollMessageShow: {
      BackgroundNone: -1;
      BackgroundTemplate: 0;
      BackgroundImage: 1;
      TemplateBlack: 1;
      TemplateWhite: 2;
      PositionCenter: 0;
      PositionLockObjectCenter: 1;
      PositionScenePosition: 2;
      HorzAlignLeft: 0;
      HorzAlignCenter: 1;
      HorzAlignRight: 2;
    };
    effectShow: {
      PositionCenter: 0;
      PositionLockObjectCenter: 1;
    };
    effectRemove: {
      AllEffects: -2;
      TargettingByType: 0;
      TargettingByGroup: 0;
      TargettingById: 1;
      TargettingSceneEffect: 5;
    };
    particleShow: {
      PositionCenter: 0;
      PositionLockObjectCenter: 1;
    };
    particleRemove: {
      AllParticles: -2;
      TargettingByType: 0;
      TargettingByGroup: 0;
      TargettingById: 1;
      TargettingSceneParticle: 5;
    };
    movieShow: {
      PositionCenter: 0;
      PositionLockObjectCenter: 1;
      PositionScenePosition: 2;
      VertAlignCenter: 0;
      VertAlignTop: 1;
      VertAlignBottom: 2;
      HorzAlignCenter: 0;
      HorzAlignLeft: 1;
      HorzAlignRight: 2;
    };
    imageShow: {
      PositionCenter: 0;
      PositionLockObjectCenter: 1;
      PositionScenePosition: 2;
      kPositionCenter: 0;
      kPositionLockObjectCenter: 1;
      kPositionScenePosition: 2;
      VertAlignCenter: 0;
      VertAlignTop: 1;
      VertAlignBottom: 2;
      kVertAlignCenter: 0;
      kVertAlignTop: 1;
      kVertAlignBottom: 2;
      HorzAlignCenter: 0;
      HorzAlignLeft: 1;
      HorzAlignRight: 2;
      kHorzAlignCenter: 0;
      kHorzAlignLeft: 1;
      kHorzAlignRight: 2;
    };
    gameSpeedChange: {
      TargettingByType: 0;
      TargettingByGroup: 0;
      TargettingById: 1;
      TargettingTouched: 2;
      TargettingLocked: 3;
    };
    timer: {
      SecondByValue: 0;
      SecondByVariable: 1;
    };
    directionMove: {
      AccordingToMoveDirection: -2;
    };
    forthBackMoveTurn: {
      MoveNone: 0;
      MoveForth: 1;
      MoveBack: 2;
      kMoveNone: 0;
      kMoveForth: 1;
      kMoveBack: 2;
      TurnNone: 0;
      TurnRight: 1;
      TurnLeft: 2;
      kTurnNone: 0;
      kTurnRight: 1;
      kTurnLeft: 2;
      AccordingToMoveDirection: -2;
    };
    menuShow: {
      None: -1;
      SlideUp: 0;
      SlideDown: 1;
      SlideLeft: 2;
      SlideRight: 3;
    };
    menuHide: {
      None: -1;
      SlideUp: 0;
      SlideDown: 1;
      SlideLeft: 2;
      SlideRight: 3;
    };
    fileLoad: {
      None: -1;
      Black: 0;
      White: 1;
      SlideUp: 2;
      SlideDown: 3;
      SlideLeft: 4;
      SlideRight: 5;
    };
    objectUnlock: {
      SetByObjectGroup: 0;
      SetByObjectId: 1;
    };
  };
  linkCondition: {
    objectWallTouched: {
      SetByObjectGroup: 0;
      SetByObjectId: 1;
    };
    objectHit: {
      SetByObjectGroup: 0;
      SetByObjectId: 1;
    };
    attackAreaTouched: {
      SetByObjectGroup: 0;
      SetByObjectId: 1;
      AttributeNone: 0;
      AttributePreset: 1;
      AttributeValue: 2;
    };
    attackAreaNear: {
      DistanceNone: 0;
      DistanceGreaterEqual: 1;
      DistanceLessEqual: 2;
      SetByObjectGroup: 0;
      SetByObjectId: 1;
      AttributeNone: 0;
      AttributePreset: 1;
      AttributeValue: 2;
    };
    objectNear: {
      DistanceNone: 0;
      DistanceGreaterEqual: 1;
      DistanceLessEqual: 2;
      SetByObjectGroup: 0;
      SetByObjectId: 1;
    };
    objectFacingEachOther: {
      SetByObjectGroup: 0;
      SetByObjectId: 1;
    };
    objectFacing: {
      SetByObjectGroup: 0;
      SetByObjectId: 1;
    };
    objectFound: {
      SetByObjectGroup: 0;
      SetByObjectId: 1;
    };
    objectFacingDirection: {
      SetByObjectGroup: 0;
      SetByObjectId: 1;
    };
    locked: {
      SetByObjectGroup: 0;
      SetByObjectId: 1;
    };
    slopeTouched: {
      DirectionUpper: 0;
      DirectionLower: 1;
      DirectionAny: 2;
      DownwardLeft: 0;
      DownwardRight: 1;
      DownwardNone: 2;
    };
  };
  conditions: {
    SwitchConditionOn: 0;
    SwitchConditionOff: 1;
    SwitchConditionOnFromOff: 2;
    SwitchConditionOffFromOn: 3;
    OperatorLess: 0;
    OperatorLessEqual: 1;
    OperatorEaual: 2;
    OperatorGreaterEqual: 3;
    OperatorGreater: 4;
    OperatorNotEqual: 5;
    CompareValue: 0;
    CompareVariable: 1;
    CompareNaN: 2;
  };
  assignments: {
    SwitchAssignOn: 0;
    SwitchAssignOff: 1;
    SwitchAssignToggle: 2;
    VariableAssignOperatorSet: 0;
    VariableAssignOperatorAdd: 1;
    VariableAssignOperatorSub: 2;
    VariableAssignOperatorMul: 3;
    VariableAssignOperatorDiv: 4;
    VariableAssignOperatorMod: 5;
    VariableAssignValue: 0;
    VariableAssignVariable: 1;
    VariableAssignRandom: 2;
    VariableAssignScript: 3;
  };
  attackAttributes: {
    Fire: 1;
    Water: 2;
    Earth: 3;
    Wind: 4;
    Lightning: 5;
    Ice: 6;
    Light: 7;
    Dark: 8;
  };
  filterEffects: {
    EffectNoise: 0;
    EffectMosaic: 1;
    EffectMonochrome: 2;
    EffectSepia: 3;
    EffectNegaPosiReverse: 4;
    EffectDefocus: 5;
    EffectChromaticAberration: 6;
    EffectDarkness: 7;
    EffectDispImage: 8;
    EffectFillColor: 9;
    EffectTransparency: 10;
    EffectBlink: 11;
    PlacementCenter: 0;
    PlacementMagnify: 1;
    PlacementTiling: 2;
    PlacementKeepRatio: 3;
    PlacementObjectCenter: 4;
  };
  systemLayers: {
    SystemLayerAllId: -1;
    SystemLayerBackgroundId: -2;
    HudLayerId: 9999;
  };
  qualifier: {
    QualifierSingle: -1;
    QualifierWhole: -2;
  };
  /**
   * @deprecated
   */
  objectType: {
    ObjectTypeAll: 0;
    ObjectTypePlayer: 1;
    ObjectTypeEnemy: 2;
  };
  objectGroup: {
    ObjectGroupAll: -1;
    ObjectGroupPlayer: 0;
    ObjectGroupEnemy: 1;
  };
  tileGroup: {
    TileGroupDefault: 0;
  };
  tile: {
    WallTop: 0;
    WallLeft: 1;
    WallRight: 2;
    WallBottom: 3;
    WallTopBit: 1;
    WallLeftBit: 2;
    WallRightBit: 4;
    WallBottomBit: 8;
    WallBitMask: 15;
  };
  direction: {
    BottomLeftBit: 2;
    BottomBit: 4;
    BottomRightBit: 8;
    LeftBit: 16;
    RightBit: 64;
    TopLeftBit: 128;
    TopBit: 256;
    TopRightBit: 512;
    AllDirectionBit: 990;
  };
  controllers: {
    OperationKeyA: 1;
    OperationKeyB: 2;
    OperationKeyX: 3;
    OperationKeyY: 4;
    OperationKeyR1: 5;
    OperationKeyR2: 6;
    OperationKeyL1: 7;
    OperationKeyL2: 8;
    OperationKeyUp: 9;
    OperationKeyDown: 10;
    OperationKeyLeft: 11;
    OperationKeyRight: 12;
    OperationKeyLeftStickUp: 13;
    OperationKeyLeftStickDown: 14;
    OperationKeyLeftStickLeft: 15;
    OperationKeyLeftStickRight: 16;
    OperationKeyRightStickUp: 17;
    OperationKeyRightStickDown: 18;
    OperationKeyRightStickLeft: 19;
    OperationKeyRightStickRight: 20;
    OperationKeyLeftClick: 21;
    OperationKeyRightClick: 22;
    OperationKeyStart: 23;
    OperationKeySelect: 24;
    OperationKeyHome: 25;
    OperationKeyOk: 26;
    OperationKeyCancel: 27;
    ReservedKeyCodePc_W: 0;
    ReservedKeyCodePc_A: 1;
    ReservedKeyCodePc_S: 2;
    ReservedKeyCodePc_D: 3;
    ReservedKeyCodePc_LeftClick: 4;
    ReservedKeyCodePc_RightClick: 5;
    ReservedKeyCodePc_Up: 10;
    ReservedKeyCodePc_Right: 11;
    ReservedKeyCodePc_Down: 12;
    ReservedKeyCodePc_Left: 13;
    ReservedKeyCodePc_MiddleClick: 22;
    ReservedKeyCodePc_WheelUp: 24;
    ReservedKeyCodePc_WhellDown: 26;
    ReservedKeyCodePc_MousePointer: 28;
  };
  animations: {
    Motion: 0;
    Effect: 1;
    Particle: 2;
  };
  tracks: {
    TimelineWall: 0;
    TimelineHit: 1;
    TimelineAttack: 2;
    TimelineConnect: 3;
  };
  objects: {
    switches: {
      InvincibleId: 1;
      FreeMoveId: 2;
      LockTargetId: 3;
      PortalTouchedId: 4;
      CriticalDamagedId: 5;
      DisabledId: 6;
      SlipOnSlopeId: 7;
      AffectOtherObjectsId: 8;
      AffectedByOtherObjectsId: 9;
      FollowConnectedPhysicsId: 10;
      DisplayAfterimageId: 11;
    };
    variables: {
      ObjectIDId: 1;
      HPId: 2;
      MaxHPId: 3;
      MinimumAttackId: 4;
      MaximumAttackId: 5;
      DamageRatioId: 6;
      AttackAttributeId: 7;
      AreaAttributeId: 8;
      XId: 9;
      YId: 10;
      VelocityXId: 11;
      VelocityYId: 12;
      PlayerIDId: 13;
      DamageValueId: 14;
      CriticalRatioId: 15;
      CriticalIncidenceId: 16;
      InvincibleDurationId: 17;
      FixedAnimationFrameId: 18;
      InstanceIDId: 19;
      InstanceCountId: 20;
      SingleInstanceIDId: 21;
      ControllerIDId: 22;
      HorizontalMoveId: 23;
      VerticalMoveId: 24;
      HorizontalAccelId: 25;
      VerticalAccelId: 26;
      HorizontalMaxMoveId: 27;
      VerticalMaxMoveId: 28;
      HorizontalDecelId: 29;
      VerticalDecelId: 30;
      DurationToTakeOverAccelerationMoveSpeedId: 31;
      ScalingXId: 32;
      ScalingYId: 33;
      DispPriorityId: 34;
      InitialJumpSpeedId: 35;
      DamageVariationValueId: 36;
      DisplayDirectionId: 37;
      ParentObjectInstanceIDId: 38;
    };
  };
  switchVariableObjects: {
    ProjectCommon: 0;
    SelfObject: -2;
    ParentObject: -7;
  };
  databaseTemplateTypes: {
    Default: 0;
    Object: 1;
  };
};
