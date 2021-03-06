/* global it, describe, expect */
import { Map, List } from 'immutable'

import { bulkBatchDeletePopup } from '../reducer'
import * as actionTypes from '../actionTypes'
import * as actions from '../actions'

describe('A suite for <DeleteBatch /> popup', function () {
  const initialState = Map({
    batchId: null,
    comment: null,
    batchStatuses: List(),
    changeId: 0
  })

  it('should return the initial state', function () {
    expect(bulkBatchDeletePopup(undefined, {})).toEqual(initialState)
  })

  it('should handle actionTypes.DELETE_BATCH', function () {
    expect(
      bulkBatchDeletePopup(undefined, {
        type: actionTypes.DELETE_BATCH,
        params: {
          batchId: '1'
        }
      })).toEqual(Map({
        batchId: '1',
        comment: null,
        batchStatuses: List(),
        changeId: 1
      }))
  })

  it('should handle actionTypes.OPEN_DELETE_BATCH_POPUP', function () {
    expect(
      bulkBatchDeletePopup(undefined, {
        type: actionTypes.OPEN_DELETE_BATCH_POPUP,
        params: {
          batchId: '1'
        }
      })).toEqual(Map({
        batchId: '1',
        comment: null,
        batchStatuses: List(),
        changeId: 0
      }))
  })

  it('should handle actionTypes.CLOSE_DELETE_BATCH_POPUP', function () {
    expect(
      bulkBatchDeletePopup(Map({
        batchId: '1',
        comment: 'test',
        batchStatuses: List(),
        changeId: 0
      }), {
        type: actionTypes.CLOSE_DELETE_BATCH_POPUP,
        params: {
          batchId: '1'
        }
      })).toEqual(Map({
        batchId: null,
        comment: null,
        batchStatuses: List(),
        changeId: 0
      }))
  })

  it('should handle actionTypes.ADD_COMMENT', function () {
    expect(
      bulkBatchDeletePopup(undefined, {
        type: actionTypes.ADD_COMMENT,
        params: {
          comment: 'test'
        }
      })).toEqual(Map({
        batchId: null,
        comment: 'test',
        batchStatuses: List(),
        changeId: 0
      }))
  })

  it('should handle actionTypes.LOAD_BATCH_STATUSES_DELETE', function () {
    expect(
      bulkBatchDeletePopup(undefined, {
        type: actionTypes.LOAD_BATCH_STATUSES_DELETE,
        result: [1, 2, 3]
      })).toEqual(Map({
        batchId: null,
        comment: null,
        batchStatuses: List([1, 2, 3]),
        changeId: 0
      }))
  })

  it('should create an action deleteBatch', function () {
    expect(actions.deleteBatch(1, 2, 3, 4)).toEqual({
      type: actionTypes.DELETE_BATCH,
      method: 'bulk.batch.edit',
      params: {
        batchId: 1,
        actorId: 2,
        batchStatusId: 3,
        batchInfo: 4
      }
    })
  })

  it('should create an action openDeletePopup', function () {
    expect(actions.openDeletePopup(1)).toEqual({
      type: actionTypes.OPEN_DELETE_BATCH_POPUP,
      params: { batchId: 1 }
    })
  })

  it('should create an action closeDeletePopup', function () {
    expect(actions.closeDeletePopup()).toEqual({
      type: actionTypes.CLOSE_DELETE_BATCH_POPUP,
      params: {}
    })
  })

  it('should create an action addComment', function () {
    expect(actions.addComment('test')).toEqual({
      type: actionTypes.ADD_COMMENT,
      params: { comment: 'test' }
    })
  })

  it('should create an action loadBatchStatuses', function () {
    expect(actions.loadBatchStatuses('test')).toEqual({
      type: actionTypes.LOAD_BATCH_STATUSES_DELETE,
      method: 'bulk.batchStatus.fetch',
      params: 'test'
    })
  })

  it('should create an action loadBatchStatuses no params', function () {
    expect(actions.loadBatchStatuses()).toEqual({
      type: actionTypes.LOAD_BATCH_STATUSES_DELETE,
      method: 'bulk.batchStatus.fetch',
      params: {}
    })
  })
})
